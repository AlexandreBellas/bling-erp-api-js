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
 */
export class Contratos extends Entity {
  /**
   * Remove um contrato.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/delete_contratos__idContrato_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'contratos',
      id: String(params.idContrato)
    })
  }

  /**
   * Obtém contratos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/get_contratos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contratos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        dataCriacaoInicio: this.prepareStringOrDateParam(
          params?.dataCriacaoInicio
        ),
        dataCriacaoFinal: this.prepareStringOrDateParam(
          params?.dataCriacaoFinal
        ),
        dataBaseInicio: this.prepareStringOrDateParam(params?.dataBaseInicio),
        dataBaseFinal: this.prepareStringOrDateParam(params?.dataBaseFinal),
        situacao: params?.situacao,
        idContato: params?.idContato,
        idContatoCobranca: params?.idContatoCobranca
      }
    })
  }

  /**
   * Obtém um contrato.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/get_contratos__idContrato_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'contratos',
      id: String(params.idContrato)
    })
  }

  /**
   * Cria um contrato.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/post_contratos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'contratos',
      body
    })
  }

  /**
   * Altera um contrato.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contratos/put_contratos__idContrato_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idContrato, ...body } = params

    return await this.repository.replace({
      endpoint: 'contratos',
      id: String(idContrato),
      body
    })
  }
}
