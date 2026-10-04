import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IUpdateParams, IUpdateBody } from './interfaces/update.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IPublishParams } from './interfaces/publish.interface'
import { IPauseParams } from './interfaces/pause.interface'

/**
 * Entidade para interação com anúncios.
 *
 * @see https://developer.bling.com.br/referencia#/An%C3%BAncios
 */
export class Anuncios extends Entity {
  /**
   * Obtém anúncios.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/get_anuncios
   */
  public async get(params: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'anuncios',
      params: {
        pagina: params.pagina,
        limite: params.limite,
        situacao: params.situacao,
        idProduto: params.idProduto,
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      }
    })
  }

  /**
   * Obtém um anúncio.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/get_anuncios__idAnuncio_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'anuncios',
      id: String(params.idAnuncio),
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      }
    })
  }

  /**
   * Cria um anúncio.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/post_anuncios
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'anuncios',
      body
    })
  }

  /**
   * Altera um anúncio.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/put_anuncios__idAnuncio_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idAnuncio, ...body } = params
    return await this.repository.replace({
      endpoint: 'anuncios',
      id: String(idAnuncio),
      body
    })
  }

  /**
   * Remove um anúncio.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/delete_anuncios__idAnuncio_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'anuncios',
      id: String(params.idAnuncio),
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      }
    })
  }

  /**
   * Publica um anúncio.
   *
   * @param {IPublishParams} params Parâmetros da operação.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/post_anuncios__idAnuncio__publicar
   */
  public async publish(params: IPublishParams): Promise<null> {
    return await this.repository.store({
      endpoint: `anuncios/${params.idAnuncio}/publicar`,
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      },
      body: {}
    })
  }

  /**
   * Pausa um anúncio.
   *
   * @param {IPauseParams} params Parâmetros da operação.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/An%C3%BAncios/post_anuncios__idAnuncio__pausar
   */
  public async pause(params: IPauseParams): Promise<null> {
    return await this.repository.store({
      endpoint: `anuncios/${params.idAnuncio}/pausar`,
      params: {
        tipoIntegracao: params.tipoIntegracao,
        idLoja: params.idLoja
      },
      body: {}
    })
  }
}
