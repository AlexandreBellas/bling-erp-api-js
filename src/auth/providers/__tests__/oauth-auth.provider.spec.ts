import { OAuthAuthProvider } from '../oauth-auth.provider'
import { OAuthClient } from '../../oauth-client'

describe('OAuthAuthProvider', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should skip headers when there is no access token', () => {
    const provider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret'
    })
    const headers: Record<string, string> = {}

    provider.applyRequestHeaders(headers)

    expect(headers).toEqual({})
  })

  it('should apply JWT resource headers when an access token exists', () => {
    const provider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret',
      accessToken: 'jwt-token'
    })
    const headers: Record<string, string> = {}

    provider.applyRequestHeaders(headers)

    expect(headers).toEqual({
      Authorization: 'Bearer jwt-token',
      'enable-jwt': '1'
    })
  })

  it('should coalesce parallel unauthorized refreshes into one call', async () => {
    const provider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret',
      refreshToken: 'refresh'
    })

    let resolveRefresh: (
      value: Awaited<ReturnType<OAuthClient['refreshTokens']>>
    ) => void = () => undefined
    const refreshSpy = jest
      .spyOn(provider.oauthClient, 'refreshTokens')
      .mockImplementation(
        () =>
          new Promise((resolve) => {
            resolveRefresh = resolve
          })
      )

    const first = provider.handleUnauthorized()
    const second = provider.handleUnauthorized()

    expect(refreshSpy).toHaveBeenCalledTimes(1)

    resolveRefresh({
      access_token: 'new',
      refresh_token: 'refresh-2'
    })

    await expect(Promise.all([first, second])).resolves.toEqual([true, true])
    expect(refreshSpy).toHaveBeenCalledTimes(1)
  })

  it('should not refresh when autoRefresh is disabled', async () => {
    const provider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret',
      refreshToken: 'refresh',
      autoRefresh: false
    })
    const refreshSpy = jest.spyOn(provider.oauthClient, 'refreshTokens')

    await expect(provider.handleUnauthorized()).resolves.toBe(false)
    expect(refreshSpy).not.toHaveBeenCalled()
  })
})
