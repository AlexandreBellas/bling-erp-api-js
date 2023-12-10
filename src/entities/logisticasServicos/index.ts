import { Entity } from '../@shared/entity'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com logísticas - serviços.
 *
 * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os
 */
export class LogisticasServicos extends Entity {
  /**
   * Obtém serviços de logísticas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os/get_logisticas_servicos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'logisticas/servicos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        tipoIntegracao: params?.tipoIntegracao
      }
    })
  }

  /**
   * Obtém um servico de logística.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os/get_logisticas_servicos__idLogisticaServico_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'logisticas/servicos',
      id: String(params.idLogisticaServico)
    })
  }

  /**
   * Desativa ou ativa um serviço de uma logística.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Dados da atualização.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os/patch_logisticas__idLogisticaServico__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idLogisticaServico, ...body } = params
    return await this.repository.update({
      endpoint: 'logisticas',
      id: `${String(idLogisticaServico)}/situacoes`,
      body
    })
  }

  /**
   * Cria um serviço de logística.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os/post_logisticas_servicos
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'logisticas/servicos',
      body
    })
  }

  /**
   * Altera um serviço de logística pelo ID.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Servi%C3%A7os/put_logisticas_servicos__idLogisticaServico_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idLogisticaServico, ...body } = params

    return await this.repository.replace({
      endpoint: 'logisticas/servicos',
      id: String(idLogisticaServico),
      body
    })
  }
}
