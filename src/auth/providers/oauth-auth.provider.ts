import { IOAuthAuthOptions } from '../interfaces/auth-options.interface'
import { IAuthProvider } from '../interfaces/auth-provider.interface'
import { OAuthClient } from '../oauth-client'

/**
 * Estratégia OAuth: JWT nas chamadas de recurso e refresh coalescido em `401`.
 */
export class OAuthAuthProvider implements IAuthProvider {
  /** Cliente OAuth usado para authorize/token/revoke. */
  public readonly oauthClient: OAuthClient

  private readonly autoRefreshOption: boolean | undefined
  private refreshPromise: Promise<boolean> | null = null

  /**
   * Constrói o provedor.
   *
   * @param options Credenciais OAuth e tokens opcionais.
   */
  constructor(options: IOAuthAuthOptions) {
    this.oauthClient = new OAuthClient(options)
    this.autoRefreshOption = options.autoRefresh ?? undefined
  }

  /**
   * @inheritDoc
   */
  public applyRequestHeaders(headers: Record<string, string>): void {
    const accessToken = this.oauthClient.accessToken

    if (!accessToken) {
      return
    }

    headers.Authorization = `Bearer ${accessToken}`
    headers['enable-jwt'] = '1'
  }

  /**
   * Renova o access token uma vez por onda de `401` paralelos.
   *
   * @returns {Promise<boolean>} `true` se o refresh concluiu e a chamada pode ser repetida.
   */
  public async handleUnauthorized(): Promise<boolean> {
    const autoRefresh =
      this.autoRefreshOption ?? Boolean(this.oauthClient.refreshToken)

    if (!autoRefresh || !this.oauthClient.refreshToken) {
      return false
    }

    if (!this.refreshPromise) {
      this.refreshPromise = this.oauthClient
        .refreshTokens()
        .then(() => true)
        .finally(() => {
          this.refreshPromise = null
        })
    }

    return await this.refreshPromise
  }
}
