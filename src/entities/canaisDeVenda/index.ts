import { Entity } from '../@shared/entity'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGetTypesParams,
  IGetTypesResponse
} from './interfaces/get-types.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com Canais de Venda.
 *
 * @see https://developer.bling.com.br/referencia#/Canais%20de%20Venda
 */
export class CanaisDeVenda extends Entity {
  /**
   * Obtém canais de venda.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Canais%20de%20Venda/get_canais_venda
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'canais-venda',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        tipos: params?.tipos,
        situacao: params?.situacao,
        agrupador: params?.agrupador
      }
    })
  }

  /**
   * Obtém um canal de venda.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Canais%20de%20Venda/get_canais_venda__idCanalVenda_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'canais-venda',
      id: String(params.idCanalVenda)
    })
  }

  /**
   * Obtém os tipos de canais de venda.
   *
   * @param {IGetTypesParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetTypesResponse>}
   *
   * @see https://developer.bling.com.br/referencia#/Canais%20de%20Venda/get_canais_venda_tipos
   */
  public async getTypes(params?: IGetTypesParams): Promise<IGetTypesResponse> {
    return await this.repository.index({
      endpoint: 'canais-venda/tipos',
      params: { agrupador: params?.agrupador }
    })
  }
}
