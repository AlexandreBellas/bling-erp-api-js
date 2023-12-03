import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams, IDeleteResponse } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IPostAccountsParams } from './interfaces/post-accounts.interface'
import { IReverseAccountsParams } from './interfaces/reverse-accounts.interface'
import { ISendParams, ISendResponse } from './interfaces/send.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com notas fiscais eletrônicas.
 *
 * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas
 */
export class Nfes extends Entity {
  /**
   * Remove múltiplas notas fiscais.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/delete_nfe
   */
  public async delete(params: IDeleteParams): Promise<IDeleteResponse> {
    return await this.repository.destroy({
      endpoint: 'nfe',
      id: '',
      params: {
        idsNotas: params.idsNotas
      }
    })
  }

  /**
   * Obtém notas fiscais.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/get_nfe
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'nfe',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        numeroLoja: params?.numeroLoja,
        situacao: params?.situacao,
        tipo: params?.tipo,
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
   * Obtém uma nota fiscal.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/get_nfe__idNotaFiscal_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'nfe',
      id: String(params.idNotaFiscal)
    })
  }

  /**
   * Cria uma nota fiscal.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/post_nfe
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'nfe',
      body
    })
  }

  /**
   * Envia uma nota fiscal.
   *
   * @param {ISendParams} params O conteúdo para a criação.
   *
   * @returns {Promise<ISendResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/post_nfe__idNotaFiscal__enviar
   */
  public async send(params: ISendParams): Promise<ISendResponse> {
    return await this.repository.store({
      endpoint: `nfe/${params.idNotaFiscal}/enviar`,
      body: {}
    })
  }

  /**
   * Lança as contas de uma nota fiscal.
   *
   * @param {IPostAccountsParams} params O conteúdo para a criação.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/post_nfe__idNotaFiscal__lancar_contas
   */
  public async postAccounts(params: IPostAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `nfe/${params.idNotaFiscal}/lancar-contas`,
      body: {}
    })
  }

  /**
   * Estorna as contas de uma nota fiscal.
   *
   * @param {IReverseAccountsParams} params O conteúdo para a criação.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/post_nfe__idNotaFiscal__estornar_contas
   */
  public async reverseAccounts(params: IReverseAccountsParams): Promise<null> {
    return await this.repository.store({
      endpoint: `nfe/${params.idNotaFiscal}/estornar-contas`,
      body: {}
    })
  }

  /**
   * Altera uma nota fiscal.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notas%20Fiscais%20Eletr%C3%B4nicas/put_nfe__idNotaFiscal_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idNotaFiscal, ...body } = params

    return await this.repository.replace({
      endpoint: 'nfe',
      id: String(idNotaFiscal),
      body
    })
  }
}
