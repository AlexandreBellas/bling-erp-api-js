import { Entity } from '../@shared/entity'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGetByLogisticParams,
  IGetByLogisticResponse
} from './interfaces/get-by-logistic.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com Logísticas - Remessas.
 *
 * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas
 */
export class LogisticasRemessas extends Entity {
  /**
   * Remove uma remessa de postagem.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas/delete_logisticas_remessas__idRemessa_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'logisticas/remessas',
      id: String(params.idRemessa)
    })
  }

  /**
   * Obtém uma remessa de postagem.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas/get_logisticas_remessas__idRemessa_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'logisticas/remessas',
      id: String(params.idRemessa)
    })
  }

  /**
   * Obtém as remessas de postagem de uma logística.
   *
   * @param {IGetByLogisticParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetByLogisticResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas/get_logisticas__idLogistica__remessas
   */
  public async getByLogistic(
    params: IGetByLogisticParams
  ): Promise<IGetByLogisticResponse> {
    return await this.repository.show({
      endpoint: 'logisticas',
      id: `${params.idLogistica}/remessas`
    })
  }

  /**
   * Cria uma remessa de postagem de uma logística.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas/post_logisticas_remessas
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'logisticas/remessas',
      body
    })
  }

  /**
   * Altera uma remessa de postagem.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Log%C3%ADsticas%20-%20Remessas/put_logisticas_remessas__idRemessa_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idRemessa, ...body } = params

    return await this.repository.replace({
      endpoint: 'logisticas/remessas',
      id: String(idRemessa),
      body
    })
  }
}
