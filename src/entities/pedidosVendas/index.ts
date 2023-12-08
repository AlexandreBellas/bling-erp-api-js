import { Entity } from '../@shared/entity'
import { IChangeSituationParams } from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import {
  IDeleteManyParams,
  IDeleteManyResponse
} from './interfaces/delete-many.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IPostAccountsParams } from './interfaces/post-accounts.interface'
import { IPostStockToDepositParams } from './interfaces/post-stock-to-deposit.interface'
import { IPostStockParams } from './interfaces/post-stock.interface'
import { IReverseAccountsParams } from './interfaces/reverse-accounts.interface'
import { IReverseStockParams } from './interfaces/reverse-stock.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Pedidos - Vendas.
 *
 * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas
 */
export class PedidosVendas extends Entity {
  /**
   * Remove pedidos de vendas.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteManyResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/delete_pedidos_vendas
   */
  public async deleteMany(
    params: IDeleteManyParams
  ): Promise<IDeleteManyResponse> {
    return await this.repository.destroy({
      endpoint: 'pedidos/vendas',
      id: '',
      params: { idsPedidosVendas: params.idsPedidosVendas }
    })
  }

  /**
   * Remove um pedido de venda.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/delete_pedidos_vendas__idPedidoVenda_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'pedidos/vendas',
      id: String(params.idPedidoVenda)
    })
  }

  /**
   * Obtém pedidos de vendas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/get_pedidos_vendas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'pedidos/vendas',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idContato: params?.idContato,
        idsSituacoes: params?.idsSituacoes,
        dataInicial: this.prepareStringOrDateParam(params?.dataInicial),
        dataFinal: this.prepareStringOrDateParam(params?.dataFinal),
        dataAlteracaoInicial: this.prepareStringOrDateParam(
          params?.dataAlteracaoInicial
        ),
        dataAlteracaoFinal: this.prepareStringOrDateParam(
          params?.dataAlteracaoFinal
        ),
        dataPrevistaInicial: this.prepareStringOrDateParam(
          params?.dataPrevistaInicial
        ),
        dataPrevistaFinal: this.prepareStringOrDateParam(
          params?.dataPrevistaFinal
        ),
        numero: params?.numero,
        idLoja: params?.idLoja,
        idVendedor: params?.idVendedor,
        idControleCaixa: params?.idControleCaixa,
        numerosLojas: params?.numerosLojas
      }
    })
  }

  /**
   * Obtém um pedido de venda.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/get_pedidos_vendas__idPedidoVenda_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'pedidos/vendas',
      id: String(params.idPedidoVenda)
    })
  }

  /**
   * Altera a situação de um pedido de venda.
   *
   * @param {IChangeSituationParams} params Parâmetros da busca.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/patch_pedidos_vendas__idPedidoVenda__situacoes__idSituacao_
   */
  public async changeSituation(params: IChangeSituationParams): Promise<null> {
    return await this.repository.update({
      endpoint: 'pedidos/vendas',
      id: `${params.idPedidoVenda}/situacoes/${params.idSituacao}`,
      body: {}
    })
  }

  /**
   * Cria um pedido de venda.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'pedidos/vendas',
      body
    })
  }

  /**
   * Lança o estoque de um pedido de venda especificando o depósito.
   *
   * @param {IPostStockToDepositParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas__idPedidoVenda__lancar_estoque__idDeposito_
   */
  public async postStockToDeposit(
    params: IPostStockToDepositParams
  ): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/vendas/${params.idPedidoVenda}/lancar-estoque/${params.idDeposito}`,
      body: {}
    })
  }

  /**
   * Lança o estoque de um pedido de venda no depósito padrão.
   *
   * @param {IPostStockParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas__idPedidoVenda__lancar_estoque
   */
  public async postStock(params: IPostStockParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/vendas/${params.idPedidoVenda}/lancar-estoque`,
      body: {}
    })
  }

  /**
   * Estorna o estoque de um pedido de venda.
   *
   * @param {IReverseStockParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas__idPedidoVenda__estornar_estoque
   */
  public async reverseStock(params: IReverseStockParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/vendas/${params.idPedidoVenda}/estornar-estoque`,
      body: {}
    })
  }

  /**
   * Lança as contas de um pedido de venda.
   *
   * @param {IPostAccountsParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas__idPedidoVenda__lancar_contas
   */
  public async postAccounts(params: IPostAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/vendas/${params.idPedidoVenda}/lancar-contas`,
      body: {}
    })
  }

  /**
   * Estorna as contas de um pedido de venda.
   *
   * @param {IReverseAccountsParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/post_pedidos_vendas__idPedidoVenda__estornar_contas
   */
  public async reverseAccounts(params: IReverseAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `pedidos/vendas/${params.idPedidoVenda}/estornar-contas`,
      body: {}
    })
  }

  /**
   * Altera um pedido de venda.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Pedidos%20-%20Vendas/put_pedidos_vendas__idPedidoVenda_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idPedidoVenda, ...body } = params

    return await this.repository.replace({
      endpoint: 'pedidos/vendas',
      id: String(idPedidoVenda),
      body
    })
  }
}
