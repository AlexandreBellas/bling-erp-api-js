import { Entity } from '../@shared/entity'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com Contas Contábeis.
 *
 * @see https://developer.bling.com.br/referencia#/Contas%20Cont%C3%A1beis
 */
export class ContasContabeis extends Entity {
  /**
   * Obtém contas contábeis.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20Cont%C3%A1beis/get_contas_contabeis
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'contas-contabeis',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        ocultarInvisiveis: params?.ocultarInvisiveis,
        ocultarContasIntegracaoPagamento:
          params?.ocultarContasIntegracaoPagamento,
        ocultarTipoContaBancaria: params?.ocultarTipoContaBancaria,
        situacoes: params?.situacoes
      }
    })
  }

  /**
   * Obtém uma conta contábil.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Contas%20Cont%C3%A1beis/get_contas_contabeis__idContaContabil_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'contas-contabeis',
      id: String(params.idContaContabil)
    })
  }
}
