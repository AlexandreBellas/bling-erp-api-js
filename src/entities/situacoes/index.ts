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
 * Entidade para interação com situações.
 *
 * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es
 */
export class Situacoes extends Entity {
  /**
   * Remove uma situação.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es/delete_situacoes__idSituacao_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'situacoes',
      id: String(params.idSituacao)
    })
  }

  /**
   * Obtém uma situação.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es/get_situacoes__idSituacao_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'situacoes',
      id: String(params.idSituacao)
    })
  }

  /**
   * Cria uma situação.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es/post_situacoes
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'situacoes',
      body
    })
  }

  /**
   * Altera uma situação.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es/put_situacoes__idSituacao_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idSituacao, ...body } = params

    return await this.repository.replace({
      endpoint: 'situacoes',
      id: String(idSituacao),
      body
    })
  }
}
