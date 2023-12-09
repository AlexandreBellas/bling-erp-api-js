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
 * Entidade para interação com contratos.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores
 */
export class ProdutosFornecedores extends Entity {
  /**
   * Remove um produto fornecedor.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores/delete_produtos_fornecedores__idProdutoFornecedor_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'produtos/fornecedores',
      id: String(params.idProdutoFornecedor)
    })
  }

  /**
   * Obtém produtos fornecedores.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores/get_produtos_fornecedores
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'produtos/fornecedores',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idProduto: params?.idProduto,
        idFornecedor: params?.idFornecedor
      }
    })
  }

  /**
   * Obtém um produto fornecedor.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores/get_produtos_fornecedores__idProdutoFornecedor_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos/fornecedores',
      id: String(params.idProdutoFornecedor)
    })
  }

  /**
   * Cria um produto fornecedor.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores/post_produtos_fornecedores
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'produtos/fornecedores',
      body
    })
  }

  /**
   * Altera um produto fornecedor.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Fornecedores/put_produtos_fornecedores__idProdutoFornecedor_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idProdutoFornecedor, ...body } = params

    return await this.repository.replace({
      endpoint: 'produtos/fornecedores',
      id: String(idProdutoFornecedor),
      body
    })
  }
}
