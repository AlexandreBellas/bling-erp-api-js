import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import {
  IDeleteManyParams,
  IDeleteManyResponse
} from './interfaces/delete-many.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams
} from './interfaces/update.interface'

/**
 * Entidade para interação com Grupos de Produtos.
 *
 * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos
 */
export class GruposDeProdutos extends Entity {
  /**
   * Remove múltiplos grupos de produtos.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteManyResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos/delete_grupos_produtos
   */
  public async deleteMany(
    params: IDeleteManyParams
  ): Promise<IDeleteManyResponse> {
    return await this.repository.destroy({
      endpoint: 'grupos-produtos',
      id: '',
      params: { idsGruposProdutos: params.idsGruposProdutos }
    })
  }

  /**
   * Remove um grupo de produtos.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos/delete_grupos_produtos__idGrupoProduto_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'grupos-produtos',
      id: String(params.idGrupoProduto)
    })
  }

  /**
   * Obtém grupos de produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/GruposDeProdutos/get_produtos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'grupos-produtos',
      params: {
        nome: params?.nome,
        nomePai: params?.nomePai,
        pagina: params?.pagina,
        limite: params?.limite,
      }
    })
  }

  /**
   * Obtém um grupo de produtos.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos/get_grupos_produtos__idGrupoProduto_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'grupos-produtos',
      id: String(params.idGrupoProduto)
    })
  }

  /**
   * Cria um grupo de produtos.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos/post_grupos_produtos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'grupos-produtos',
      body
    })
  }

  /**
   * Altera um grupo de produtos.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Grupos%20de%20Produtos/put_grupos_produtos__idGrupoProduto_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<null> {
    const { idGrupoProduto, ...body } = params

    return await this.repository.replace({
      endpoint: 'grupos-produtos',
      id: String(idGrupoProduto),
      body
    })
  }
}
