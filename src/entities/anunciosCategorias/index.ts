import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'

/**
 * Entidade para interação com categorias de anúncios.
 *
 * @see https://developer.bling.com.br/referencia#/An%C3%BAncios%20-%20Categorias
 */
export class AnunciosCategorias extends Entity {
  /**
   * Obtém categorias de anúncios.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios%20-%20Categorias/get_anuncios_categorias
   */
  public async get(params: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'anuncios/categorias',
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja,
        idCategoria: params.idCategoria,
        tipoProduto: params.tipoProduto
      }
    })
  }

  /**
   * Obtém uma categoria de anúncio.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios%20-%20Categorias/get_anuncios_categorias__idCategoria_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'anuncios/categorias',
      id: String(params.idCategoria),
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      }
    })
  }
}
