import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import {
  IFindBalanceParams,
  IFindBalanceResponse
} from './interfaces/find-balance.interface'
import {
  IGetBalancesParams,
  IGetBalancesResponse
} from './interfaces/get-balances.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com estoques.
 *
 * @see https://developer.bling.com.br/referencia#/Estoques
 */
export class Estoques extends Entity {
  /**
   * Obtém o saldo em estoque de produtos por depósito.
   *
   * @param {IFindBalanceParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindBalanceResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Estoques/get_estoques_saldos__idDeposito_
   */
  public async findBalance(
    params: IFindBalanceParams
  ): Promise<IFindBalanceResponse> {
    return await this.repository.show({
      endpoint: 'estoques/saldos',
      id: String(params.idDeposito),
      params: { idsProdutos: params.idsProdutos }
    })
  }

  /**
   * Obtém o saldo em estoque de produtos.
   *
   * @param {IGetBalancesParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetBalancesResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Estoques/get_estoques_saldos
   */
  public async getBalances(
    params: IGetBalancesParams
  ): Promise<IGetBalancesResponse> {
    return await this.repository.index({
      endpoint: 'estoques/saldos',
      params: { idsProdutos: params.idsProdutos }
    })
  }

  /**
   * Cria um registro de estoque.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Estoques/post_estoques
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'estoques',
      body
    })
  }

  /**
   * Altera um registro de estoque.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Estoques/put_estoques__idEstoque_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idEstoque, ...body } = params

    return await this.repository.replace({
      endpoint: 'estoques',
      id: String(idEstoque),
      body
    })
  }
}
