import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGetBalanceParams,
  IGetBalanceResponse
} from './interfaces/get-balance.interface'
import {
  IGetBalancesParams,
  IGetBalancesResponse
} from './interfaces/get-balances.interface'
import {
  IGetBalanceSumParams,
  IGetBalanceSumResponse
} from './interfaces/get-balance-sum.interface'
import {
  IGetTotalBalanceParams,
  IGetTotalBalanceResponse
} from './interfaces/get-total-balance.interface'
import {
  ICreateParams,
  ICreateBody,
  ICreateResponse
} from './interfaces/create.interface'
import { IUpdateParams, IUpdateBody } from './interfaces/update.interface'

/**
 * Entidade para interação com lançamentos de lotes de produtos.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos
 */
export class ProdutosLotesLancamentos extends Entity {
  /**
   * Obtém os lançamentos de um lote de produto.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos_lotes__idLote__lancamentos
   */
  public async get(params: IGetParams): Promise<IGetResponse> {
    return await this.repository.show({
      endpoint: 'produtos/lotes',
      id: `${params.idLote}/lancamentos`
    })
  }

  /**
   * Obtém um lançamento de um lote de produto.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos_lotes_lancamentos__idLancamento_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos/lotes/lancamentos',
      id: String(params.idLancamento)
    })
  }

  /**
   * Obtém o saldo de um lote de produto.
   *
   * @param {IGetBalanceParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetBalanceResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos__idProduto__lotes__idLote__depositos__idDeposito__saldo
   */
  public async getBalance(
    params: IGetBalanceParams
  ): Promise<IGetBalanceResponse> {
    return await this.repository.show({
      endpoint: 'produtos',
      id: `${params.idProduto}/lotes/${params.idLote}/depositos/${params.idDeposito}/saldo`
    })
  }

  /**
   * Obtém os saldos dos lotes de um produto por depósito.
   *
   * @param {IGetBalancesParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetBalancesResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos__idProduto__lotes_depositos__idDeposito__saldo
   */
  public async getBalances(
    params: IGetBalancesParams
  ): Promise<IGetBalancesResponse> {
    return await this.repository.show({
      endpoint: 'produtos',
      id: `${params.idProduto}/lotes/depositos/${params.idDeposito}/saldo`,
      params: {
        idsLotes: params.idsLotes
      }
    })
  }

  /**
   * Obtém a soma dos saldos dos lotes de um produto em um depósito.
   *
   * @param {IGetBalanceSumParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetBalanceSumResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos__idProduto__lotes_depositos__idDeposito__saldo_soma
   */
  public async getBalanceSum(
    params: IGetBalanceSumParams
  ): Promise<IGetBalanceSumResponse> {
    return await this.repository.show({
      endpoint: 'produtos',
      id: `${params.idProduto}/lotes/depositos/${params.idDeposito}/saldo/soma`
    })
  }

  /**
   * Obtém o saldo total dos lotes de um produto.
   *
   * @param {IGetTotalBalanceParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetTotalBalanceResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/get_produtos__idProduto__lotes_saldo_soma
   */
  public async getTotalBalance(
    params: IGetTotalBalanceParams
  ): Promise<IGetTotalBalanceResponse> {
    return await this.repository.show({
      endpoint: 'produtos',
      id: `${params.idProduto}/lotes/saldo/soma`
    })
  }

  /**
   * Cria um lançamento de um lote.
   *
   * @param {ICreateParams & ICreateBody} params O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/post_produtos_lotes__idLote__lancamentos
   */
  public async create(
    params: ICreateParams & ICreateBody
  ): Promise<ICreateResponse> {
    const { idLote, ...body } = params
    return await this.repository.store({
      endpoint: `produtos/lotes/${idLote}/lancamentos`,
      body
    })
  }

  /**
   * Altera a observação de um lançamento de um lote de um produto.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes%20Lan%C3%A7amentos/patch_produtos_lotes_lancamentos__idLancamento_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idLancamento, ...body } = params
    return await this.repository.update({
      endpoint: 'produtos/lotes/lancamentos',
      id: String(idLancamento),
      body
    })
  }
}
