import { Entity } from '../@shared/entity'
import { IAddComponentParameter } from './interfaces/add-component.interface'
import {
  IChangeComponentBody,
  IChangeComponentParams
} from './interfaces/change-component.interface'
import { IDeleteComponentsParams } from './interfaces/delete-components.interface'
import { IDeleteParams, IDeleteResponse } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com Produtos - Estruturas.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas
 */
export class ProdutosEstruturas extends Entity {
  /**
   * Remove componentes específicos de um produto com composição.
   *
   * @param {IDeleteComponentsParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/delete_produtos_estruturas__idProdutoEstrutura__componentes
   */
  public async deleteComponents(
    params: IDeleteComponentsParams
  ): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'produtos/estruturas',
      id: `${params.idProdutoEstrutura}/componentes`,
      params: { idsComponentes: params.idsComponentes }
    })
  }

  /**
   * Remove a estrutura de múltiplos produtos.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteResponse>} Retorno da deleção.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/delete_produtos_estruturas
   */
  public async delete(params: IDeleteParams): Promise<IDeleteResponse> {
    return await this.repository.destroy({
      endpoint: 'produtos/estruturas',
      id: '',
      params: { idsProdutos: params.idsProdutos }
    })
  }

  /**
   * Obtém a estrutura de um produto com composição.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/get_produtos_estruturas__idProdutoEstrutura_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos/estruturas',
      id: String(params.idProdutoEstrutura)
    })
  }

  /**
   * Altera um componente de uma estrutura.
   *
   * @param {IChangeComponentParams & IChangeComponentBody} params O conteúdo para a alteração.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/patch_produtos_estruturas__idProdutoEstrutura__componentes__idComponente_
   */
  public async changeComponent(
    params: IChangeComponentParams & IChangeComponentBody
  ): Promise<null> {
    const { idComponente, idProdutoEstrutura, ...body } = params
    return await this.repository.update({
      endpoint: 'produtos/estruturas',
      id: `${idProdutoEstrutura}/componentes/${idComponente}`,
      body
    })
  }

  /**
   * Adiciona componente(s) a uma estrutura.
   *
   * @param {IAddComponentParameter} parameters O conteúdo para a adição.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/post_produtos_estruturas__idProdutoEstrutura__componentes
   */
  public async addComponent(parameters: IAddComponentParameter): Promise<null> {
    return await this.repository.store({
      endpoint: `produtos/estruturas/${parameters.params.idProdutoEstrutura}`,
      body: parameters.body
    })
  }

  /**
   * Altera a estrutura de um produto com composição.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Estruturas/put_produtos_estruturas__idProdutoEstrutura_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idProdutoEstrutura, ...body } = params

    return await this.repository.replace({
      endpoint: 'produtos/estruturas',
      id: String(idProdutoEstrutura),
      body
    })
  }
}
