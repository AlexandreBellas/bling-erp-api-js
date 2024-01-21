import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com logísticas - etiquetas.
 *
 * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Etiquetas
 */
export class LogisticasEtiquetas extends Entity {
  /**
   * Obtém etiquetas das vendas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Etiquetas/get_logisticas_etiquetas
   */
  public async get(params: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'logisticas/etiquetas',
      params: {
        formato: params.formato,
        idsVendas: params.idsVendas
      }
    })
  }
}
