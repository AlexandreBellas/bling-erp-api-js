import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetSingleResponse } from './interfaces/get.interface'
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
   * @returns {Promise<IGetSingleResponse[]>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async get(params: IGetParams): Promise<IGetSingleResponse[]> {
    return await this.repository.index({
      endpoint: 'categorias/produtos',
      params: {
        pagina: params.pagina,
        limite: params.limite
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
