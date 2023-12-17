import { Entity } from '../@shared/entity'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IPostAccountsParams } from './interfaces/post-accounts.interface'
import { IPostStockParams } from './interfaces/post-stock.interface'
import { IReverseAccountsParams } from './interfaces/reverse-accounts.interface'
import { IReverseStockParams } from './interfaces/reverse-stock.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Pedidos - Compras.
 *
 * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras
 */
export class PedidosCompras extends Entity {
  /**
   * Remove um pedido de compra.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/delete_pedidos_compras__idPedidoCompra_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'pedidos/compras',
      id: String(params.idPedidoCompra)
    })
  }

  /**
   * Obtém pedidos de compras.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/get_pedidos_compras
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'pedidos/compras',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idFornecedor: params?.idFornecedor,
        valorSituacao: params?.valorSituacao,
        idSituacao: params?.idSituacao,
        dataInicial: this.prepareStringOrDateParam(params?.dataInicial),
        dataFinal: this.prepareStringOrDateParam(params?.dataFinal)
      }
    })
  }

  /**
   * Obtém um pedido de compra.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/get_pedidos_compras__idPedidoCompra_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'pedidos/compras',
      id: String(params.idPedidoCompra)
    })
  }

  /**
   * Altera a situação de um pedido de compra.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Parâmetros da busca.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/patch_pedidos_compras__idPedidoCompra__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idPedidoCompra, ...body } = params
    return await this.repository.update({
      endpoint: 'pedidos/compras',
      id: `${idPedidoCompra}/situacoes`,
      body
    })
  }

  /**
   * Cria um pedido de compra.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/post_pedidos_compras
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'pedidos/compras',
      body
    })
  }

  /**
   * Lança as contas de um pedido de compra.
   *
   * @param {IPostAccountsParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/post_pedidos_compras__idPedidoCompra__lancar_contas
   */
  public async postAccounts(params: IPostAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/compras/${params.idPedidoCompra}/lancar-contas`,
      body: {}
    })
  }

  /**
   * Estorna as contas de um pedido de compra.
   *
   * @param {IReverseAccountsParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/post_pedidos_compras__idPedidoCompra__estornar_contas
   */
  public async reverseAccounts(params: IReverseAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/compras/${params.idPedidoCompra}/estornar-contas`,
      body: {}
    })
  }

  /**
   * Lança o estoque de um pedido de compra.
   *
   * @param {IPostStockParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/post_pedidos_compras__idPedidoCompra__lancar_estoque
   */
  public async postStock(params: IPostStockParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/compras/${params.idPedidoCompra}/lancar-estoque`,
      body: {}
    })
  }

  /**
   * Estorna o estoque de um pedido de compra.
   *
   * @param {IReverseStockParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/post_pedidos_compras__idPedidoCompra__estornar_estoque
   */
  public async reverseStock(params: IReverseStockParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/compras/${params.idPedidoCompra}/estornar-estoque`,
      body: {}
    })
  }

  /**
   * Altera um pedido de compra.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Compras/put_pedidos_compras__idPedidoCompra_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idPedidoCompra, ...body } = params

    return await this.repository.replace({
      endpoint: 'pedidos/compras',
      id: String(idPedidoCompra),
      body
    })
  }
}
