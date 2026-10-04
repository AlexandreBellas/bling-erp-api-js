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
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Categorias - Receitas e Despesas.
 *
 * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas
 */
export class CategoriasReceitasDespesas extends Entity {
  /**
   * Remove múltiplas categorias de receita e despesa.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteManyResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/delete_categorias_receitas_despesas
   */
  public async deleteMany(
    params: IDeleteManyParams
  ): Promise<IDeleteManyResponse> {
    return await this.repository.destroy({
      endpoint: 'categorias/receitas-despesas',
      id: '',
      params: { idsCategorias: params.idsCategorias }
    })
  }

  /**
   * Remove uma categoria de receita e despesa.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/delete_categorias_receitas_despesas__idCategoria_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'categorias/receitas-despesas',
      id: String(params.idCategoria)
    })
  }

  /**
   * Obtém categorias de receitas e despesas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/get_categorias_receitas_despesas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'categorias/receitas-despesas',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        tipo: params?.tipo,
        situacao: params?.situacao
      }
    })
  }

  /**
   * Obtém uma categoria de receita e despesa.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/get_categorias_receitas_despesas__idCategoria_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'categorias/receitas-despesas',
      id: String(params.idCategoria)
    })
  }

  /**
   * Cria uma categoria de receita e despesa.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/post_categorias_receitas_despesas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'categorias/receitas-despesas',
      body
    })
  }

  /**
   * Atualiza uma categoria de receita e despesa.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/put_categorias_receitas_despesas__idCategoria_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idCategoria, ...body } = params

    return await this.repository.replace({
      endpoint: 'categorias/receitas-despesas',
      id: String(idCategoria),
      body
    })
  }
}
