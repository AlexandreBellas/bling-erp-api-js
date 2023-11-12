import { IBlingRepository } from '../../repositories/bling.repository.interface'

/**
 * Entidade base para o projeto.
 */
export abstract class BaseEntity {
  /** @property Repositório para conexão com o Bling. */
  protected repository: IBlingRepository

  /**
   * Constrói o objeto.
   *
   * @param repository O repositório para uso da integração.
   */
  constructor(repository: IBlingRepository) {
    this.repository = repository
  }
}
