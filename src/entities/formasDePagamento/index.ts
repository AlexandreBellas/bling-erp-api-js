import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com formas de pagamento.
 */
export class FormasDePagamento extends Entity {
  /**
   * Remove uma forma de pagamento.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Formas%20de%20Pagamentos/delete_formas_pagamentos__idFormaPagamento_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'formas-pagamentos',
      id: String(params.idFormaPagamento)
    })
  }

  /**
   * Obtém formas de pagamentos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/get_contratos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'formas-pagamentos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        descricao: params?.descricao,
        tiposPagamentos: params?.tiposPagamentos,
        situacao: params?.situacao
      }
    })
  }

  /**
   * Obtém uma forma de pagamento.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Formas%20de%20Pagamentos/get_formas_pagamentos__idFormaPagamento_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'formas-pagamentos',
      id: String(params.idFormaPagamento)
    })
  }

  /**
   * Cria uma forma de pagamento.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Formas%20de%20Pagamentos/post_formas_pagamentos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'formas-pagamentos',
      body
    })
  }

  /**
   * Altera uma forma de pagamento.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Formas%20de%20Pagamentos/put_formas_pagamentos__idFormaPagamento_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idFormaPagamento, ...body } = params

    return await this.repository.replace({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento),
      body
    })
  }
}
