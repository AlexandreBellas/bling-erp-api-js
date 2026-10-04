import { Entity } from '../@shared/entity'
import { IDeleteParams } from './interfaces/delete.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IUpdateParams, IUpdateBody } from './interfaces/update.interface'
import { IChangeSituationParams } from './interfaces/change-situation.interface'

/**
 * Entidade para interação com ordens de serviço.
 *
 * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o
 */
export class OrdensServico extends Entity {
  /**
   * Remove uma ordem de serviço.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/delete_ordens_servico__idOrdemServico_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'ordens/servico',
      id: String(params.idOrdemServico)
    })
  }

  /**
   * Obtém ordens de serviço.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/get_ordens_servico
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'ordens/servico',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        idsSituacoes: params?.idsSituacoes,
        dataInicial: this.prepareStringOrDateParam(params?.dataInicial),
        dataFinal: this.prepareStringOrDateParam(params?.dataFinal),
        dataPrevistaInicial: this.prepareStringOrDateParam(
          params?.dataPrevistaInicial
        ),
        dataPrevistaFinal: this.prepareStringOrDateParam(
          params?.dataPrevistaFinal
        ),
        dataConclusaoInicial: this.prepareStringOrDateParam(
          params?.dataConclusaoInicial
        ),
        dataConclusaoFinal: this.prepareStringOrDateParam(
          params?.dataConclusaoFinal
        ),
        dataSaidaInicial: this.prepareStringOrDateParam(
          params?.dataSaidaInicial
        ),
        dataSaidaFinal: this.prepareStringOrDateParam(params?.dataSaidaFinal),
        dataGarantiaInicial: this.prepareStringOrDateParam(
          params?.dataGarantiaInicial
        ),
        dataGarantiaFinal: this.prepareStringOrDateParam(
          params?.dataGarantiaFinal
        ),
        idContato: params?.idContato,
        idVendedor: params?.idVendedor,
        numero: params?.numero,
        numeroSerie: params?.numeroSerie
      }
    })
  }

  /**
   * Obtém uma ordem de serviço.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/get_ordens_servico__idOrdemServico_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'ordens/servico',
      id: String(params.idOrdemServico)
    })
  }

  /**
   * Cria uma ordem de serviço.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/post_ordens_servico
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'ordens/servico',
      body
    })
  }

  /**
   * Altera uma ordem de serviço.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/put_ordens_servico__idOrdemServico_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idOrdemServico, ...body } = params
    return await this.repository.replace({
      endpoint: 'ordens/servico',
      id: String(idOrdemServico),
      body
    })
  }

  /**
   * Altera a situação de uma ordem de serviço.
   *
   * @param {IChangeSituationParams} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Ordens%20de%20Servi%C3%A7o/patch_ordens_servico__idOrdemServico__situacoes__idSituacao_
   */
  public async changeSituation(params: IChangeSituationParams): Promise<null> {
    return await this.repository.update({
      endpoint: 'ordens/servico',
      id: `${params.idOrdemServico}/situacoes/${params.idSituacao}`,
      body: {}
    })
  }
}
