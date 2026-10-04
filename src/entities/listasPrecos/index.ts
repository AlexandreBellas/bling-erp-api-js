import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'

/**
 * Entidade para interação com listas de preços.
 *
 * @see https://developer.bling.com.br/referencia#/Listas%20de%20Pre%C3%A7os
 */
export class ListasPrecos extends Entity {
  /**
   * Obtém listas de preços.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Listas%20de%20Pre%C3%A7os/get_listas_precos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'listas-precos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite
      }
    })
  }

  /**
   * Obtém uma lista de preço.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Listas%20de%20Pre%C3%A7os/get_listas_precos__idListaPreco_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'listas-precos',
      id: String(params.idListaPreco)
    })
  }
}
