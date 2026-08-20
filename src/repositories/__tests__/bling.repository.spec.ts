import { JwtAuthProvider } from '../../auth/providers/jwt-auth.provider'
import { OAuthAuthProvider } from '../../auth/providers/oauth-auth.provider'
import { OpaqueAuthProvider } from '../../auth/providers/opaque-auth.provider'
import { BlingRepository } from '../bling.repository'

describe('BlingRepository interceptors', () => {
  const assignAdapter = (repository: BlingRepository, adapter: jest.Mock) => {
    ;(
      repository as unknown as { api: { defaults: { adapter: jest.Mock } } }
    ).api.defaults.adapter = adapter
  }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should send JWT headers on resource requests', async () => {
    const repository = new BlingRepository({
      baseUrl: 'https://api.bling.com.br/Api/v3',
      authProvider: new JwtAuthProvider({
        method: 'jwt',
        accessToken: 'jwt-token'
      })
    })
    const adapter = jest.fn(async (config) => ({
      data: { data: [] },
      status: 200,
      statusText: 'OK',
      headers: {},
      config
    }))
    assignAdapter(repository, adapter)

    await repository.index({ endpoint: 'produtos' })

    const jwtConfig = adapter.mock.calls[0]?.[0]
    expect(jwtConfig?.headers.get('Authorization')).toBe('Bearer jwt-token')
    expect(jwtConfig?.headers.get('enable-jwt')).toBe('1')
  })

  it('should send only Bearer headers for opaque tokens', async () => {
    const repository = new BlingRepository({
      baseUrl: 'https://api.bling.com.br/Api/v3',
      authProvider: new OpaqueAuthProvider({
        method: 'opaque',
        accessToken: 'opaque-token'
      })
    })
    const adapter = jest.fn(async (config) => ({
      data: { data: [] },
      status: 200,
      statusText: 'OK',
      headers: {},
      config
    }))
    assignAdapter(repository, adapter)

    await repository.index({ endpoint: 'produtos' })

    const opaqueConfig = adapter.mock.calls[0]?.[0]
    expect(opaqueConfig?.headers.get('Authorization')).toBe(
      'Bearer opaque-token'
    )
    expect(opaqueConfig?.headers.get('enable-jwt')).toBeFalsy()
  })

  it('should refresh once and retry the original request after 401', async () => {
    const authProvider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret',
      accessToken: 'expired',
      refreshToken: 'refresh'
    })
    const handleUnauthorized = jest
      .spyOn(authProvider, 'handleUnauthorized')
      .mockImplementation(async () => {
        jest
          .spyOn(authProvider.oauthClient, 'accessToken', 'get')
          .mockReturnValue('renewed')
        return true
      })

    const repository = new BlingRepository({
      baseUrl: 'https://api.bling.com.br/Api/v3',
      authProvider
    })

    const adapter = jest
      .fn()
      .mockImplementationOnce(async (config) => {
        const error = Object.assign(new Error('Unauthorized'), {
          isAxiosError: true,
          response: { status: 401, data: {}, headers: {}, config },
          config
        })
        throw error
      })
      .mockImplementationOnce(async (config) => ({
        data: { data: [] },
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }))
    assignAdapter(repository, adapter)

    await expect(repository.index({ endpoint: 'produtos' })).resolves.toEqual({
      data: []
    })
    expect(handleUnauthorized).toHaveBeenCalledTimes(1)
    expect(adapter).toHaveBeenCalledTimes(2)
    expect(adapter.mock.calls[1]?.[0].headers.get('Authorization')).toBe(
      'Bearer renewed'
    )
  })

  it('should not retry a 401 more than once', async () => {
    const authProvider = new OAuthAuthProvider({
      method: 'oauth',
      clientId: 'id',
      clientSecret: 'secret',
      accessToken: 'expired',
      refreshToken: 'refresh'
    })
    jest.spyOn(authProvider, 'handleUnauthorized').mockResolvedValue(true)

    const repository = new BlingRepository({
      baseUrl: 'https://api.bling.com.br/Api/v3',
      authProvider
    })

    const adapter = jest.fn(async (config) => {
      const error = Object.assign(new Error('Unauthorized'), {
        isAxiosError: true,
        response: {
          status: 401,
          data: {
            error: {
              type: 'invalid_token',
              message: 'Erro',
              description: 'Token inválido'
            }
          },
          headers: {},
          config
        },
        config
      })
      throw error
    })
    assignAdapter(repository, adapter)

    await expect(
      repository.index({ endpoint: 'produtos' })
    ).rejects.toMatchObject({
      message: 'Token inválido'
    })
    expect(adapter).toHaveBeenCalledTimes(2)
  })
})
