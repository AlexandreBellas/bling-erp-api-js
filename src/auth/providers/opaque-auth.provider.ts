import { IOpaqueAuthOptions } from '../interfaces/auth-options.interface'
import { IAuthProvider } from '../interfaces/auth-provider.interface'

/**
 * Estratégia de token opaco legado: apenas `Authorization: Bearer`.
 *
 * @see https://developer.bling.com.br/migracao-jwt
 */
export class OpaqueAuthProvider implements IAuthProvider {
  private readonly accessToken: string

  /**
   * Constrói o provedor.
   *
   * @param options Token opaco já emitido.
   */
  constructor(options: IOpaqueAuthOptions) {
    this.accessToken = options.accessToken
  }

  /**
   * @inheritDoc
   */
  public applyRequestHeaders(headers: Record<string, string>): void {
    headers.Authorization = `Bearer ${this.accessToken}`
  }
}
