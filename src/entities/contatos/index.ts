import { Entity } from '../@shared/entity'
import { IChangeSituationManyBody } from './interfaces/change-situation-many.interface'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteManyParams } from './interfaces/delete-many.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IFindTypesParams,
  IFindTypesResponse
} from './interfaces/find-types.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com Contatos.
 */
export class Contatos extends Entity {
  /**
   * Remove múltiplos contatos.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/delete_contatos
   */
  public async deleteMany(params: IDeleteManyParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'contatos',
      id: String(''),
      params: {
        idsContatos: params.idsContatos
      }
    })
  }

  /**
   * Remove um contato.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/delete_contatos__idContato_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'contatos',
      id: String(params.idContato)
    })
  }

  /**
   * Obtém contatos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/get_contatos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contatos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        pesquisa: params?.pesquisa,
        criterio: params?.criterio,
        idTipoContato: params?.idTipoContato,
        idVendedor: params?.idVendedor,
        uf: params?.uf,
        telefone: params?.telefone,
        idsContatos: params?.idsContatos,
        numeroDocumento: params?.numeroDocumento
      }
    })
  }

  /**
   * Obtém um contato.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/get_contatos__idContato_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'contatos',
      id: String(params.idContato)
    })
  }

  /**
   * Obtém os tipos de contato de um contato.
   *
   * @param {IFindTypesParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindTypesResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/get_contatos__idContato__tipos
   */
  public async findTypes(
    params: IFindTypesParams
  ): Promise<IFindTypesResponse> {
    return await this.repository.show({
      endpoint: 'contatos',
      id: `${params.idContato}/tipos`
    })
  }

  /**
   * Altera a situação de um contato.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Os parâmetros para a alteração.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/patch_contatos__idContato__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idContato, ...body } = params
    return await this.repository.replace({
      endpoint: 'contatos',
      id: `${idContato}/situacoes`,
      body
    })
  }

  /**
   * Altera a situação de múltiplos contatos.
   *
   * @param {IChangeSituationManyBody} body O corpo da requisição.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/post_contatos_situacoes
   */
  public async changeSituationMany(
    body: IChangeSituationManyBody
  ): Promise<null> {
    return await this.repository.store({
      endpoint: 'contatos/situacoes',
      body
    })
  }

  /**
   * Cria um contato.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/post_contatos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'contatos',
      body
    })
  }

  /**
   * Altera um contato.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contatos/put_contatos__idContato_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idContato, ...body } = params

    return await this.repository.replace({
      endpoint: 'contatos',
      id: String(idContato),
      body
    })
  }
}
