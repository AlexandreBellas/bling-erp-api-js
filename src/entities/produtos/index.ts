import { Entity } from '../@shared/entity'
import {
  IChangeSituationManyBody,
  IChangeSituationManyResponse
} from './interfaces/change-situation-many.interface'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
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
 * Entidade para interação com Produtos.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos
 */
export class Produtos extends Entity {
  /**
   * Remove múltiplos produtos.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteManyResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/delete_produtos
   */
  public async deleteMany(
    params: IDeleteManyParams
  ): Promise<IDeleteManyResponse> {
    return await this.repository.destroy({
      endpoint: 'produtos',
      id: '',
      params: { idsProdutos: params.idsProdutos }
    })
  }

  /**
   * Remove um produto.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/delete_produtos__idProduto_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'produtos',
      id: String(params.idProduto)
    })
  }

  /**
   * Obtém produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/get_produtos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'produtos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        criterio: params?.criterio,
        tipo: params?.tipo,
        idComponente: params?.idComponente,
        dataInclusaoInicial: this.prepareStringOrDateParam(
          params?.dataInclusaoInicial,
          true
        ),
        dataInclusaoFinal: this.prepareStringOrDateParam(
          params?.dataInclusaoFinal,
          true
        ),
        dataAlteracaoInicial: this.prepareStringOrDateParam(
          params?.dataAlteracaoInicial,
          true
        ),
        dataAlteracaoFinal: this.prepareStringOrDateParam(
          params?.dataAlteracaoFinal,
          true
        ),
        idCategoria: params?.idCategoria,
        idLoja: params?.idLoja,
        codigo: params?.codigo,
        nome: params?.nome,
        idsProdutos: params?.idsProdutos,
        codigos: params?.codigos
      }
    })
  }

  /**
   * Obtém um produto.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/get_produtos__idProduto_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos',
      id: String(params.idProduto)
    })
  }

  /**
   * Altera a situação de um produto.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Parâmetros da alteração.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/patch_produtos__idProduto__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idProduto, ...body } = params
    return await this.repository.update({
      endpoint: 'produtos',
      id: `${idProduto}/situacoes`,
      body
    })
  }

  /**
   * Cria um produto.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/post_produtos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'produtos',
      body
    })
  }

  /**
   * Altera a situação de múltiplos produtos.
   *
   * @param {IChangeSituationManyBody} body O conteúdo para a criação.
   *
   * @returns {Promise<IChangeSituationManyResponse | null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/post_produtos_situacoes
   */
  public async changeSituationMany(
    body: IChangeSituationManyBody
  ): Promise<IChangeSituationManyResponse | null> {
    return await this.repository.store({
      endpoint: 'produtos/situacoes',
      body
    })
  }

  /**
   * Altera um produto.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/put_produtos__idProduto_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idProduto, ...body } = params

    return await this.repository.replace({
      endpoint: 'produtos',
      id: String(idProduto),
      body
    })
  }
}
