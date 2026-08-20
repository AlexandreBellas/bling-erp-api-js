import { IJwtAuthOptions } from '../interfaces/auth-options.interface'
import { IAuthProvider } from '../interfaces/auth-provider.interface'

/**
 * Estratégia JWT: Bearer + `enable-jwt: 1` em todas as chamadas de recurso.
 *
 * @see https://developer.bling.com.br/migracao-jwt
 */
export class JwtAuthProvider implements IAuthProvider {
  private readonly accessToken: string

  /**
   * Constrói o provedor.
   *
   * @param options Token JWT já emitido.
   */
  constructor(options: IJwtAuthOptions) {
    this.accessToken = options.accessToken
  }

  /**
   * @inheritDoc
   */
  public applyRequestHeaders(headers: Record<string, string>): void {
    headers.Authorization = `Bearer ${this.accessToken}`
    headers['enable-jwt'] = '1'
  }
}
