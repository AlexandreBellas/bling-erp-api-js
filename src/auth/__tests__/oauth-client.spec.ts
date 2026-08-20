import axios, { AxiosInstance } from 'axios'
import { BlingApiException } from '../../exceptions/bling-api.exception'
import { BlingInternalException } from '../../exceptions/bling-internal.exception'
import { encodeBasicAuth } from '../encode-basic-auth'
import { IBlingTokenSet } from '../interfaces/token-set.interface'
import { OAuthClient } from '../oauth-client'

describe('OAuthClient', () => {
  const post = jest.fn()

  beforeEach(() => {
    post.mockReset()
    jest
      .spyOn(axios, 'create')
      .mockReturnValue({ post } as unknown as AxiosInstance)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  const createClient = (onTokens?: (tokens: IBlingTokenSet) => void) => {
    return new OAuthClient({
      method: 'oauth',
      clientId: 'client-id',
      clientSecret: 'client-secret',
      ...(onTokens ? { onTokens } : {})
    })
  }

  it('should build the authorize URL', () => {
    const client = createClient()

    expect(
      client.getAuthorizationUrl({
        state: 'csrf',
        redirectUri: 'http://localhost:3000/auth'
      })
    ).toBe(
      'https://www.bling.com.br/Api/v3/oauth/authorize?response_type=code&client_id=client-id&state=csrf&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth'
    )
  })

  it('should omit redirect_uri when only state is provided', () => {
    const client = createClient()
    const url = new URL(
      client.getAuthorizationUrl({
        state: 'csrf'
      })
    )

    expect(url.searchParams.get('state')).toBe('csrf')
    expect(url.searchParams.has('redirect_uri')).toBe(false)
  })

  it('should exchange the authorization code with JWT and Basic headers', async () => {
    const tokens = {
      access_token: 'jwt',
      refresh_token: 'refresh',
      token_type: 'Bearer',
      expires_in: 21600,
      scope: 'produtos'
    }
    const onTokens = jest.fn()
    post.mockResolvedValue({ data: tokens })

    const client = createClient(onTokens)
    const response = await client.exchangeAuthorizationCode('code-1')

    expect(post).toHaveBeenCalledWith(
      'oauth/token',
      expect.any(URLSearchParams),
      {
        headers: {
          Authorization: `Basic ${encodeBasicAuth('client-id', 'client-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'enable-jwt': '1'
        }
      }
    )
    expect((post.mock.calls[0][1] as URLSearchParams).toString()).toBe(
      'grant_type=authorization_code&code=code-1'
    )
    expect(response).toEqual(tokens)
    expect(client.accessToken).toBe('jwt')
    expect(client.refreshToken).toBe('refresh')
    expect(onTokens).toHaveBeenCalledWith(tokens)
  })

  it('should keep refresh-token-only construction without an empty access_token', () => {
    const client = new OAuthClient({
      method: 'oauth',
      clientId: 'client-id',
      clientSecret: 'client-secret',
      refreshToken: 'refresh-only'
    })

    expect(client.accessToken).toBeUndefined()
    expect(client.refreshToken).toBe('refresh-only')
    expect(client.tokenSet).toEqual({ refresh_token: 'refresh-only' })
    expect(client.tokenSet).not.toHaveProperty('access_token')
  })

  it('should refresh tokens with grant_type=refresh_token', async () => {
    const client = new OAuthClient({
      method: 'oauth',
      clientId: 'client-id',
      clientSecret: 'client-secret',
      refreshToken: 'old-refresh'
    })
    const tokens = {
      access_token: 'new-jwt',
      refresh_token: 'new-refresh'
    }
    post.mockResolvedValue({ data: tokens })

    await expect(client.refreshTokens()).resolves.toEqual(tokens)
    expect((post.mock.calls[0][1] as URLSearchParams).toString()).toBe(
      'grant_type=refresh_token&refresh_token=old-refresh'
    )
    expect(post.mock.calls[0][2].headers['enable-jwt']).toBe('1')
  })

  it('should throw when refreshing without a refresh token', async () => {
    const client = createClient()

    await expect(client.refreshTokens()).rejects.toBeInstanceOf(
      BlingInternalException
    )
    expect(post).not.toHaveBeenCalled()
  })

  it('should revoke a token with advanced parameters', async () => {
    post.mockResolvedValue({ data: '' })
    const client = createClient()

    await client.revoke({
      token: 'jwt',
      tokenTypeHint: 'access_token',
      revokeAction: 'logout',
      revokeTarget: 'company'
    })

    expect(post).toHaveBeenCalledWith(
      'oauth/revoke',
      expect.any(URLSearchParams),
      {
        headers: {
          Authorization: `Basic ${encodeBasicAuth('client-id', 'client-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    expect((post.mock.calls[0][1] as URLSearchParams).toString()).toBe(
      'token=jwt&token_type_hint=access_token&revoke_action=logout&revoke_target=company'
    )
  })

  it('should revoke with only the token field when optional params are omitted', async () => {
    post.mockResolvedValue({ data: '' })
    const client = createClient()

    await client.revoke({
      token: 'jwt'
    })

    expect((post.mock.calls[0][1] as URLSearchParams).toString()).toBe(
      'token=jwt'
    )
  })

  it('should map structured OAuth errors to BlingApiException', async () => {
    post.mockRejectedValue({
      response: {
        data: {
          error: {
            type: 'INVALID_REQUEST',
            message: 'Erro',
            description: 'Code expirado'
          }
        }
      }
    })

    const client = createClient()

    await expect(
      client.exchangeAuthorizationCode('expired')
    ).rejects.toBeInstanceOf(BlingApiException)
  })
})
