import { Entity } from '../@shared/entity'
import {
  ICalculateItemTaxBody,
  ICalculateItemTaxParams,
  ICalculateItemTaxResponse
} from './interfaces/calculate-item-tax.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com naturezas de operações.
 *
 * @see https://developer.bling.com.br/referencia#/Naturezas%20de%20Opera%C3%A7%C3%B5es
 */
export class NaturezasDeOperacoes extends Entity {
  /**
   * Obtém naturezas de operações.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Naturezas%20de%20Opera%C3%A7%C3%B5es/get_naturezas_operacoes
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'naturezas-operacoes',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        situacao: params?.situacao,
        descricao: params?.descricao
      }
    })
  }

  /**
   * Calcula os impostos de um item.
   *
   * @param {ICalculateItemTaxParams & ICalculateItemTaxBody} params O conteúdo para o cálculo.
   *
   * @returns {Promise<ICalculateItemTaxResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Naturezas%20de%20Opera%C3%A7%C3%B5es/post_naturezas_operacoes__idNaturezaOperacao__calcular_imposto_item
   */
  public async calculateItemTax(
    params: ICalculateItemTaxParams & ICalculateItemTaxBody
  ): Promise<ICalculateItemTaxResponse> {
    const { idNaturezaOperacao, ...body } = params
    return await this.repository.store({
      endpoint: `naturezas-operacoes/${idNaturezaOperacao}/calcular-imposto-item`,
      body
    })
  }
}
