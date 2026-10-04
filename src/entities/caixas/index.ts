import { Entity } from '../@shared/entity'
import { IDeleteParams } from './interfaces/delete.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import {
  IUpdateParams,
  IUpdateBody,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com caixas e bancos.
 *
 * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos
 */
export class Caixas extends Entity {
  /**
   * Remove um lançamento de caixa e banco.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos/delete_caixas__idCaixa_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'caixas',
      id: String(params.idCaixa)
    })
  }

  /**
   * Obtém lista de lançamentos de caixas e bancos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos/get_caixas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'caixas',
      params: {
        pagina: params?.pagina,
        dataInicial: this.prepareStringOrDateParam(params?.dataInicial),
        dataFinal: this.prepareStringOrDateParam(params?.dataFinal),
        idsCategorias: params?.idsCategorias,
        idContaFinanceira: params?.idContaFinanceira,
        pesquisa: params?.pesquisa,
        valor: params?.valor,
        situacaoConciliacao: params?.situacaoConciliacao,
        situacao: params?.situacao
      }
    })
  }

  /**
   * Obtém um lançamento de caixa e banco.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos/get_caixas__idCaixa_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'caixas',
      id: String(params.idCaixa)
    })
  }

  /**
   * Cria um novo lançamento de caixa e banco.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos/post_caixas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'caixas',
      body
    })
  }

  /**
   * Atualiza um lançamento de caixa e banco.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Caixas%20e%20Bancos/put_caixas__idCaixa_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idCaixa, ...body } = params
    return await this.repository.replace({
      endpoint: 'caixas',
      id: String(idCaixa),
      body
    })
  }
}
