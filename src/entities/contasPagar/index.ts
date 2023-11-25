import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IDownloadBody,
  IDownloadParams,
  IDownloadResponse
} from './interfaces/download.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Contas a Pagar.
 */
export class ContasPagar extends Entity {
  /**
   * Remove uma conta a pagar.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/delete_contas_pagar__idContaPagar_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'contas/pagar',
      id: String(params.idContaPagar)
    })
  }

  /**
   * Obtém contas a pagar.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/get_contas_pagar
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contas/pagar',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        dataEmissaoInicial: this.prepareStringOrDateParam(
          params?.dataEmissaoInicial
        ),
        dataEmissaoFinal: this.prepareStringOrDateParam(
          params?.dataEmissaoFinal
        ),
        dataVencimentoInicial: this.prepareStringOrDateParam(
          params?.dataVencimentoInicial
        ),
        dataVencimentoFinal: this.prepareStringOrDateParam(
          params?.dataVencimentoFinal
        ),
        dataPagamentoInicial: this.prepareStringOrDateParam(
          params?.dataPagamentoInicial
        ),
        dataPagamentoFinal: this.prepareStringOrDateParam(
          params?.dataPagamentoFinal
        ),
        situacao: params?.situacao,
        idContato: params?.idContato
      }
    })
  }

  /**
   * Obtém uma conta a pagar.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/get_contas_pagar__idContaPagar_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'contas/pagar',
      id: String(params.idContaPagar)
    })
  }

  /**
   * Cria uma conta a pagar.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/post_contas_pagar
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'contas/pagar',
      body
    })
  }

  /**
   * Cria o recebimento de uma conta a pagar.
   *
   * @param {IDownloadParams & IDownloadBody} params O conteúdo para a criação.
   *
   * @returns {Promise<IDownloadResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/post_contas_pagar__idContaPagar__baixar
   */
  public async download(
    params: IDownloadParams & IDownloadBody
  ): Promise<IDownloadResponse> {
    const { idContaPagar, ...body } = params
    return await this.repository.store({
      endpoint: `contas/pagar/${idContaPagar}/baixar`,
      body
    })
  }

  /**
   * Atualiza uma conta a pagar.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20a%20Pagar/put_contas_pagar__idContaPagar_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idContaPagar, ...body } = params

    return await this.repository.replace({
      endpoint: 'contas/pagar',
      id: String(idContaPagar),
      body
    })
  }
}
