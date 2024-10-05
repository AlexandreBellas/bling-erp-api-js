import { Entity } from '../@shared/entity'
import {
  IObtainTaxBody,
  IObtainTaxParams,
  IObtainTaxResponse
} from './interfaces/obtain-tax.interface'
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
   * Obtém regras de tributação da natureza de operação.
   *
   * @param {IObtainTaxParams & IObtainTaxBody} params O conteúdo para o cálculo.
   *
   * @returns {Promise<IObtainTaxResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Naturezas%20de%20Opera%C3%A7%C3%B5es/post_naturezas_operacoes__idNaturezaOperacao__obter_tributacao
   */
  public async obtainTax(
    params: IObtainTaxParams & IObtainTaxBody
  ): Promise<IObtainTaxResponse> {
    const { idNaturezaOperacao, ...body } = params
    return await this.repository.store({
      endpoint: `naturezas-operacoes/${idNaturezaOperacao}/obter-tributacao`,
      body
    })
  }
}
