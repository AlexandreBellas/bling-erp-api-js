import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com logísticas.
 *
 * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas
 */
export class Logisticas extends Entity {
  /**
   * Remove uma logística.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas/delete_logisticas__idLogistica_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'logisticas',
      id: String(params.idLogistica)
    })
  }

  /**
   * Obtém logísticas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas/get_logisticas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'logisticas',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        tipoIntegracao: params?.tipoIntegracao,
        situacao: params?.situacao
      }
    })
  }

  /**
   * Obtém uma logística.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas/get_logisticas__idLogistica_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'logisticas',
      id: String(params.idLogistica)
    })
  }

  /**
   * Cria logística.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas/post_logisticas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'logisticas',
      body
    })
  }

  /**
   * Altera uma logística.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas/put_logisticas__idLogistica_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idLogistica, ...body } = params

    return await this.repository.replace({
      endpoint: 'logisticas',
      id: String(idLogistica),
      body
    })
  }
}
