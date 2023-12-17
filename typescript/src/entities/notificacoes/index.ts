import { Entity } from '../@shared/entity'
import { ICreateParams, ICreateResponse } from './interfaces/create.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com notificações.
 *
 * @see https://developer.bling.com.br/referencia#/Notifica%C3%A7%C3%B5es
 */
export class Notificacoes extends Entity {
  /**
   * Obtém todas as notificações de uma empresa em um período.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notifica%C3%A7%C3%B5es/get_notificacoes
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'notificacoes',
      params: {
        periodo: params?.periodo
      }
    })
  }

  /**
   * Marca notificação como lida.
   *
   * @param {ICreateParams} params Os parâmetros para leitura.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Notifica%C3%A7%C3%B5es/post_notificacoes__idNotificacao__confirmar_leitura
   */
  public async read(params: ICreateParams): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: `notificacoes/${params.idNotificacao}/confirmar-leitura`,
      body: {}
    })
  }
}
