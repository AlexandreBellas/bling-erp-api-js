import convertDateToString from '../../helpers/functions/convert-date-to-string'
import { IBlingRepository } from '../../repositories/bling.repository.interface'

/**
 * Entidade base para o projeto.
 */
export abstract class Entity {
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

  /**
   * Prepara um parâmetro de data para chamada do repositório.
   *
   * @param param Parâmetro do tipo `string`, `Date` ou `undefined`
   * @param includeTime Define se horas e minutos são inclusos no resultado
   *
   * @returns {string|undefined}
   */
  protected prepareStringOrDateParam(
    param?: string | Date,
    includeTime: boolean = false
  ): string | undefined {
    if (param === undefined) {
      return undefined
    }

    if (typeof param === 'string') {
      return param
    }

    return convertDateToString(param, includeTime)
  }
}
