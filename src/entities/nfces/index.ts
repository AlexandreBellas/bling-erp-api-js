import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IPostAccountParams } from './interfaces/post-account.interface'
import { IReverseParams } from './interfaces/reverse.interface'
import { ISendParams, ISendResponse } from './interfaces/send.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com notas fiscais de consumidor eletrônicas.
 *
 * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas
 */
export class Nfces extends Entity {
  /**
   * Obtém notas fiscais de consumidor.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/get_nfce
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'nfce',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        situacao: params?.situacao,
        dataEmissaoInicial: this.prepareStringOrDateParam(
          params?.dataEmissaoInicial
        ),
        dataEmissaoFinal: this.prepareStringOrDateParam(
          params?.dataEmissaoFinal
        )
      }
    })
  }

  /**
   * Obtém uma nota fiscal de consumidor.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/get_nfce__idNotaFiscalConsumidor_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'nfce',
      id: String(params.idNotaFiscalConsumidor)
    })
  }

  /**
   * Cria uma nota fiscal de consumidor.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/post_nfce
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'nfce',
      body
    })
  }

  /**
   * Envia uma nota de consumidor.
   *
   * @param {ISendParams} params O conteúdo para o envio.
   *
   * @returns {Promise<ISendResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/post_nfce__idNotaFiscalConsumidor__enviar
   */
  public async send(params: ISendParams): Promise<ISendResponse> {
    return await this.repository.store({
      endpoint: `nfce/${params.idNotaFiscalConsumidor}/enviar`,
      body: {}
    })
  }

  /**
   * Lança as contas de uma nota fiscal.
   *
   * @param {IPostAccountParams} params O conteúdo para o lançamento.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/post_nfce__idNotaFiscalConsumidor__lancar_contas
   */
  public async postAccount(params: IPostAccountParams): Promise<null> {
    return await this.repository.store({
      endpoint: `nfce/${params.idNotaFiscalConsumidor}/lancar-contas`,
      body: {}
    })
  }

  /**
   * Estorna as contas de uma nota fiscal.
   *
   * @param {IReverseParams} params O conteúdo para o estorno.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/post_nfce__idNotaFiscalConsumidor__estornar_contas
   */
  public async reverse(params: IReverseParams): Promise<null> {
    return await this.repository.store({
      endpoint: `nfce/${params.idNotaFiscalConsumidor}/estornar-contas`,
      body: {}
    })
  }

  /**
   * Altera uma nota fiscal de consumidor.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Consumidor%20Eletr%C3%B4nicas/put_nfce__idNotaFiscalConsumidor_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idNotaFiscalConsumidor, ...body } = params

    return await this.repository.replace({
      endpoint: 'nfce',
      id: String(idNotaFiscalConsumidor),
      body
    })
  }
}
