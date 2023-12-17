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
 * Entidade para interação com Situações - Transições.
 *
 * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20Transi%C3%A7%C3%B5es
 */
export class SituacoesTransicoes extends Entity {
  /**
   * Remove uma transição.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20Transi%C3%A7%C3%B5es/delete_situacoes_transicoes__idTransicao_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'situacoes/transicoes',
      id: String(params.idTransicao)
    })
  }

  /**
   * Obtém uma transição.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20Transi%C3%A7%C3%B5es/get_situacoes_transicoes__idTransicao_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'situacoes/transicoes',
      id: String(params.idTransicao)
    })
  }

  /**
   * Cria uma transição.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20Transi%C3%A7%C3%B5es/post_situacoes_transicoes
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'situacoes/transicoes',
      body
    })
  }

  /**
   * Altera uma transição.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20Transi%C3%A7%C3%B5es/put_situacoes_transicoes__idTransicao_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idTransicao, ...body } = params

    return await this.repository.replace({
      endpoint: 'situacoes/transicoes',
      id: String(idTransicao),
      body
    })
  }
}
