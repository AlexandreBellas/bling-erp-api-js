import { IAuthProvider } from '../auth/interfaces/auth-provider.interface'
import { BlingRepository } from '../repositories/bling.repository'
import { IBlingRepository } from '../repositories/bling.repository.interface'

/**
 * Opções para obter o repositório HTTP.
 */
export interface IGetRepositoryOptions {
  /**
   * A URL base da API de recursos.
   */
  baseUrl: string

  /**
   * Estratégia de autenticação.
   */
  authProvider: IAuthProvider
}

/**
 * Obtém a instância do repositório para injeção de dependência.
 *
 * @param options URL base e provedor de autenticação.
 *
 * @returns {IBlingRepository}
 */
export function getRepository(
  options: IGetRepositoryOptions
): IBlingRepository {
  return new BlingRepository({
    baseUrl: options.baseUrl,
    authProvider: options.authProvider
  })
}
