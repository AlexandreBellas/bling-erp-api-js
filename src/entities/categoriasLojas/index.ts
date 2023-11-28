import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com Categorias - Lojas.
 *
 * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas
 */
export class CategoriasLojas extends Entity {
  /**
   * Remove o vínculo de uma categoria da loja com a de produto.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas/delete_categorias_lojas__idCategoriaLoja_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'categorias/lojas',
      id: String(params.idCategoriaLoja)
    })
  }

  /**
   * Obtém categorias de lojas virtuais vinculadas a de produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas/get_categorias_lojas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'categorias/lojas',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idLoja: params?.idLoja,
        idCategoriaProduto: params?.idCategoriaProduto,
        idCategoriaProdutoPai: params?.idCategoriaProdutoPai
      }
    })
  }

  /**
   * Obtém uma categoria da loja vinculada a de produto.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas/get_categorias_lojas__idCategoriaLoja_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'categorias/lojas',
      id: String(params.idCategoriaLoja)
    })
  }

  /**
   * Cria o vínculo de uma categoria da loja com a de produto.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas/post_categorias_lojas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'categorias/lojas',
      body
    })
  }

  /**
   * Altera o vínculo de uma categoria da loja com a de produto.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Lojas/put_categorias_lojas__idCategoriaLoja_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idCategoriaLoja, ...body } = params

    return await this.repository.replace({
      endpoint: 'categorias/lojas',
      id: String(idCategoriaLoja),
      body
    })
  }
}
