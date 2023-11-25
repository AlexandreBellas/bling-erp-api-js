import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com Categorias - Produtos.
 */
export class CategoriasProdutos extends Entity {
  /**
   * Remove uma categoria de produto.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Produtos/delete_categorias_produtos__idCategoriaProduto_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'categorias/produtos',
      id: String(params.idCategoriaProduto)
    })
  }

  /**
   * Obtém categorias de produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Produtos/get_categorias_produtos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'categorias/produtos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite
      }
    })
  }

  /**
   * Obtém uma categoria de produto.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Produtos/get_categorias_produtos__idCategoriaProduto_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'categorias/produtos',
      id: String(params.idCategoriaProduto)
    })
  }

  /**
   * Cria uma categoria de produto.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Produtos/post_categorias_produtos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'categorias/produtos',
      body
    })
  }

  /**
   * Altera uma categoria de produto.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Produtos/put_categorias_produtos__idCategoriaProduto_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idCategoriaProduto, ...body } = params

    return await this.repository.replace({
      endpoint: 'categorias/produtos',
      id: String(idCategoriaProduto),
      body
    })
  }
}
