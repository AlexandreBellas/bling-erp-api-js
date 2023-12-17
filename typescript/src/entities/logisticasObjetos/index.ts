import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com logísticas - objetos.
 *
 * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Objetos
 */
export class LogisticasObjetos extends Entity {
  /**
   * Remove um objeto de logística personalizada.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Objetos/delete_logisticas_objetos__idObjeto_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'logisticas/objetos',
      id: String(params.idObjeto)
    })
  }

  /**
   * Obtém um objeto de logística.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Objetos/get_logisticas_objetos__idObjeto_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'logisticas/objetos',
      id: String(params.idObjeto)
    })
  }

  /**
   * Cria um objeto de logística.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Objetos/post_logisticas_objetos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'logisticas/objetos',
      body
    })
  }

  /**
   * Altera um objeto de logística pelo ID.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Objetos/put_logisticas_objetos__idObjeto_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idObjeto, ...body } = params

    return await this.repository.replace({
      endpoint: 'logisticas/objetos',
      id: String(idObjeto),
      body
    })
  }
}
