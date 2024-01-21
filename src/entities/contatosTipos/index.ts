import { Entity } from '../@shared/entity'
import { IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com Contatos - Tipos.
 *
 * @see https://developer.bling.com.br/referencia#/Contatos%20-%20Tipos
 */
export class ContatosTipos extends Entity {
  /**
   * Obtém tipos de contato.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos%20-%20Tipos/get_contatos_tipos
   */
  public async get(): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contatos/tipos'
    })
  }
}
