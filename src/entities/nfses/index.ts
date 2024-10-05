import { Entity } from '../@shared/entity'
import { ISendResponse } from '../nfces/interfaces/send.interface'
import { ICancelBody, ICancelParams } from './interfaces/cancel.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetConfigurationsResponse } from './interfaces/get-configurations.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { ISendParams } from './interfaces/send.interface'
import { IUpdateConfigurationsBody } from './interfaces/update-configurations.interface'

/**
 * Entidade para interação com notas fiscais de serviço eletrônicas.
 *
 * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas
 */
export class Nfses extends Entity {
  /**
   * Exclui uma nota de serviço.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/delete_nfse__idNotaServico_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'nfse',
      id: String(params.idNotaServico)
    })
  }

  /**
   * Obtém notas de serviços.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/get_nfse
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'nfse',
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
   * Obtém uma nota de serviço.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/get_nfse__idNotaServico_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'nfse',
      id: String(params.idNotaServico)
    })
  }

  /**
   * Configurações de nota de serviço.
   *
   * @returns {Promise<IGetConfigurationsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/get_nfse_configuracoes
   */
  public async getConfigurations(): Promise<IGetConfigurationsResponse> {
    return await this.repository.index({
      endpoint: 'nfse/configuracoes'
    })
  }

  /**
   * Cria uma nota de serviço.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/post_nfse
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'nfse',
      body
    })
  }

  /**
   * Envia uma nota de serviço.
   *
   * @param {ISendParams} params Os parâmetros de envio.
   *
   * @returns {Promise<ISendResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/post_nfse__idNotaServico__enviar
   */
  public async send(params: ISendParams): Promise<ISendResponse> {
    return await this.repository.store({
      endpoint: `nfse/${params.idNotaServico}/enviar`,
      body: {}
    })
  }

  /**
   * Cancela uma nota de serviço.
   *
   * @param {ICancelParams & ICancelBody} params Os parâmetros de envio.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/post_nfse__idNotaServico__cancelar
   */
  public async cancel(params: ICancelParams & ICancelBody): Promise<null> {
    const { idNotaServico, ...body } = params
    return await this.repository.store({
      endpoint: `nfse/${idNotaServico}/cancelar`,
      body
    })
  }

  /**
   * Configurações de nota de serviço.
   *
   * @param {IUpdateConfigurationsBody} body Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20de%20Servi%C3%A7o%20Eletr%C3%B4nicas/put_nfse_configuracoes
   */
  public async updateConfigurations(
    body: IUpdateConfigurationsBody
  ): Promise<null> {
    return await this.repository.replace({
      endpoint: 'nfse/configuracoes',
      id: '',
      body
    })
  }
}
