import convertDateToString from '@helpers/functions/convert-date-to-string'
import { Entity } from '../@shared/entity'
import { ICancelBankSlipsBody } from './interfaces/cancel-bank-slips.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IDownloadBody,
  IDownloadParams,
  IDownloadResponse
} from './interfaces/download.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGetBankSlipsParams,
  IGetBankSlipsResponse
} from './interfaces/get-bank-slips.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Contas a Receber.
 */
export class ContasReceber extends Entity {
  /**
   * Remove uma conta a receber.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'contas/receber',
      id: String(params.idContaReceber)
    })
  }

  /**
   * Obtém contas a receber.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contas/receber',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        situacoes: params?.situacoes,
        tipoFiltroData: params?.tipoFiltroData,
        dataInicial: params?.dataInicial
          ? convertDateToString(params.dataInicial)
          : undefined,
        dataFinal: params?.dataFinal
          ? convertDateToString(params.dataFinal)
          : undefined,
        idsCategorias: params?.idsCategorias,
        idPortador: params?.idPortador,
        idVendedor: params?.idVendedor,
        idFormaPagamento: params?.idFormaPagamento
      }
    })
  }

  /**
   * Obtém uma conta a receber.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'contas/receber',
      id: String(params.idContaReceber)
    })
  }

  /**
   * Obtém os boletos - Bling conta.
   *
   * @param {IGetBankSlipsParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetBankSlipsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async getBankSlips(
    params: IGetBankSlipsParams
  ): Promise<IGetBankSlipsResponse> {
    return await this.repository.index({
      endpoint: 'contas/receber/view/bankslips',
      params: {
        idOrigem: params.idOrigem,
        situations: params.situations
      }
    })
  }

  /**
   * Cria uma conta a receber.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'contas/receber',
      body
    })
  }

  /**
   * Cria o recebimento de uma conta a receber.
   *
   * @param {IDownloadParams & IDownloadBody} params O conteúdo para a criação.
   *
   * @returns {Promise<IDownloadResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async download(
    params: IDownloadParams & IDownloadBody
  ): Promise<IDownloadResponse> {
    const { idContaReceber, ...body } = params
    return await this.repository.store({
      endpoint: `contas/receber/${idContaReceber}/baixar`,
      body
    })
  }

  /**
   * Cancelar Boletos - Bling Conta.
   *
   * @param {ICancelBankSlipsBody} body Parâmetros do cancelamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async cancelBankSlips(body: ICancelBankSlipsBody): Promise<null> {
    return await this.repository.store({
      endpoint: 'contas/receber/cancel/bankslips',
      body
    })
  }

  /**
   * Altera uma conta a receber.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idContaReceber, ...body } = params

    return await this.repository.replace({
      endpoint: 'contas/receber',
      id: String(idContaReceber),
      body
    })
  }
}
