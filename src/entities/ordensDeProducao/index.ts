import { Entity } from '../@shared/entity'
import { IChangeSituationBody, IChangeSituationParams } from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGenerateOverDemandResponse } from './interfaces/generate-over-demand.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IUpdateBody, IUpdateParams } from './interfaces/update.interface'

/**
 * Entidade para interação com Ordens de Produção.
 *
 * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o
 */
export class OrdensDeProducao extends Entity {
  /**
   * Remove uma ordem de produção.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/delete_ordens_producao__idOrdemProducao_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'ordens-producao',
      id: String(params.idOrdemProducao)
    })
  }

  /**
   * Obtém ordens de produção.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/get_ordens_producao
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'ordens-producao',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idsSituacoes: params?.idsSituacoes
      }
    })
  }

  /**
   * Obtém uma ordem de produção.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/get_ordens_producao__idOrdemProducao_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'ordens-producao',
      id: String(params.idOrdemProducao)
    })
  }

  /**
   * Cria uma ordem de produção.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/post_ordens_producao
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'ordens-producao',
      body
    })
  }

  /**
   * Gera ordens de produção sob demanda.
   *
   * @returns {Promise<IGenerateOverDemandResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/post_ordens_producao_gerar_sob_demanda
   */
  public async generateOverDemand(): Promise<IGenerateOverDemandResponse> {
    return await this.repository.store({
      endpoint: 'ordens-producao/gerar-sob-demanda',
      body: {}
    })
  }

  /**
   * Altera uma ordem de produção.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Produ%C3%A7%C3%A3o/put_ordens_producao__idOrdemProducao_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<null> {
    const { idOrdemProducao, ...body } = params

    return await this.repository.replace({
      endpoint: 'ordens-producao',
      id: String(idOrdemProducao),
      body
    })
  }
  /**
   * Altera a situação de uma ordem de produção.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Parâmetros da alteração.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/.idOrdemProducao__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idOrdemProducao, ...body } = params
    return await this.repository.update({
      endpoint: 'ordens-producao',
      id: `${idOrdemProducao}/situacoes`,
      body
    })
  }
}
