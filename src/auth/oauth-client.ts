import axios, { AxiosError, AxiosInstance } from 'axios'
import { IDefaultErrorResponse } from '../entities/@shared/interfaces/error.interface'
import { BlingApiException } from '../exceptions/bling-api.exception'
import { BlingInternalException } from '../exceptions/bling-internal.exception'
import { DEFAULT_OAUTH_BASE_URL } from './constants'
import { encodeBasicAuth } from './encode-basic-auth'
import { IAuthorizationUrlParams } from './interfaces/authorization-url.interface'
import { IOAuthAuthOptions } from './interfaces/auth-options.interface'
import { IRevokeOptions } from './interfaces/revoke.interface'
import { IBlingTokenSet } from './interfaces/token-set.interface'

/**
 * Cliente OAuth 2.0 do Bling (authorization code, refresh e revoke).
 *
 * **Somente no servidor.** O `clientSecret` não deve ser usado em código de
 * frontend. O grant suportado pelo Bling é apenas `authorization_code`.
 *
 * @see https://developer.bling.com.br/aplicativos#fluxo-de-autoriza%C3%A7%C3%A3o
 * @see https://developer.bling.com.br/migracao-jwt
 */
export class OAuthClient {
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly oauthBaseUrl: string
  private readonly onTokens?: IOAuthAuthOptions['onTokens']
  private readonly http: AxiosInstance
  private currentTokenSet?: IBlingTokenSet

  /**
   * Constrói o cliente OAuth.
   *
   * @param options Credenciais e tokens iniciais.
   */
  constructor(options: IOAuthAuthOptions) {
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.oauthBaseUrl = (
      options.oauthBaseUrl ?? DEFAULT_OAUTH_BASE_URL
    ).replace(/\/+$/, '')
    this.onTokens = options.onTokens
    this.http = axios.create({
      baseURL: this.oauthBaseUrl
    })

    if (options.accessToken || options.refreshToken) {
      this.currentTokenSet = {
        access_token: options.accessToken ?? ''
      }

      if (options.refreshToken) {
        this.currentTokenSet.refresh_token = options.refreshToken
      }
    }
  }

  /**
   * Obtém o access token atual, se houver.
   */
  public get accessToken(): string | undefined {
    const token = this.currentTokenSet?.access_token
    return token || undefined
  }

  /**
   * Obtém o refresh token atual, se houver.
   */
  public get refreshToken(): string | undefined {
    return this.currentTokenSet?.refresh_token
  }

  /**
   * Obtém o último conjunto de tokens retornado pelo Bling.
   */
  public get tokenSet(): IBlingTokenSet | undefined {
    return this.currentTokenSet
  }

  /**
   * Monta a URL de autorização (`GET /oauth/authorize`).
   *
   * O `authorization_code` expira em 1 minuto. `redirect_uri` é opcional; o
   * valor cadastrado no aplicativo prevalece.
   *
   * @param params Estado CSRF e redirect opcional.
   *
   * @returns {string} URL absoluta para redirecionar o usuário.
   *
   * @see https://developer.bling.com.br/aplicativos#authorization-code
   */
  public getAuthorizationUrl(params: IAuthorizationUrlParams): string {
    const url = new URL(`${this.oauthBaseUrl}/oauth/authorize`)
    url.searchParams.set('response_type', 'code')
    url.searchParams.set('client_id', this.clientId)
    url.searchParams.set('state', params.state)

    if (params.redirectUri) {
      url.searchParams.set('redirect_uri', params.redirectUri)
    }

    return url.toString()
  }

  /**
   * Troca o `authorization_code` por tokens (`grant_type=authorization_code`).
   *
   * Sempre envia `enable-jwt: 1`. O code expira em 1 minuto e só pode ser
   * usado uma vez.
   *
   * @param code O code recebido no callback de autorização.
   *
   * @returns {Promise<IBlingTokenSet>} Tokens emitidos pelo Bling.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/aplicativos#tokens-de-acesso
   * @see https://developer.bling.com.br/migracao-jwt
   */
  public async exchangeAuthorizationCode(
    code: string
  ): Promise<IBlingTokenSet> {
    return await this.requestToken({
      grant_type: 'authorization_code',
      code
    })
  }

  /**
   * Renova os tokens (`grant_type=refresh_token`).
   *
   * O refresh token do Bling expira em 30 dias. Sempre envia `enable-jwt: 1`.
   *
   * @returns {Promise<IBlingTokenSet>} Novo conjunto de tokens.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/aplicativos#refresh-token
   */
  public async refreshTokens(): Promise<IBlingTokenSet> {
    const refreshToken = this.refreshToken

    if (!refreshToken) {
      throw new BlingInternalException(
        'Não há refresh_token disponível para renovar o acesso.'
      )
    }

    return await this.requestToken({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  }

  /**
   * Revoga um token (`POST /oauth/revoke`), com suporte à revogação avançada.
   *
   * @param options Token, dica de tipo e parâmetros avançados opcionais.
   *
   * @returns {Promise<void>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/aplicativos#revogando-o-access-token
   * @see https://developer.bling.com.br/aplicativos#revogacao-avancada
   */
  public async revoke(options: IRevokeOptions): Promise<void> {
    const body = new URLSearchParams()
    body.set('token', options.token)

    if (options.tokenTypeHint) {
      body.set('token_type_hint', options.tokenTypeHint)
    }

    if (options.revokeAction) {
      body.set('revoke_action', options.revokeAction)
    }

    if (options.revokeTarget) {
      body.set('revoke_target', options.revokeTarget)
    }

    await this.http
      .post('oauth/revoke', body, {
        headers: {
          Authorization: `Basic ${encodeBasicAuth(this.clientId, this.clientSecret)}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, 'oauth/revoke')
      )
  }

  /**
   * Solicita tokens em `/oauth/token` com JWT habilitado.
   *
   * @param body Campos `grant_type` e correlatos.
   *
   * @returns {Promise<IBlingTokenSet>}
   */
  private async requestToken(
    body: Record<string, string>
  ): Promise<IBlingTokenSet> {
    const params = new URLSearchParams(body)

    const tokens = await this.http
      .post<IBlingTokenSet>('oauth/token', params, {
        headers: {
          Authorization: `Basic ${encodeBasicAuth(this.clientId, this.clientSecret)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'enable-jwt': '1'
        }
      })
      .then((response) => response.data)
      .catch((error: AxiosError<IDefaultErrorResponse>) =>
        this.defaultCatchBehavior(error, 'oauth/token')
      )

    this.currentTokenSet = tokens

    if (this.onTokens) {
      await this.onTokens(tokens)
    }

    return tokens
  }

  /**
   * Trata os erros OAuth no mesmo formato da API de recursos.
   *
   * @param rawError Erro do axios.
   * @param endpoint Endpoint chamado.
   *
   * @returns {never}
   * @throws {BlingApiException|BlingInternalException}
   */
  private defaultCatchBehavior(
    rawError: AxiosError<IDefaultErrorResponse>,
    endpoint: string
  ): never {
    const data = rawError.response?.data

    if (!data) {
      throw new BlingInternalException(
        `Não foi possível realizar a chamada HTTP: ${rawError.config?.method} ${endpoint}`
      )
    }

    throw new BlingApiException(data)
  }
}
