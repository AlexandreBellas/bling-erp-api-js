import { Entity } from '../@shared/entity'
import { IFindParams, IFindResponse } from './interfaces/find.interface'

/**
 * Entidade para interação com documentos compartilhados.
 *
 * @see https://developer.bling.com.br/referencia#/Documentos%20Compartilhados
 */
export class DocumentosCompartilhados extends Entity {
  /**
   * Obtém um documento compartilhado.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Documentos%20Compartilhados/get_documentos_compartilhados__token_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'documentos-compartilhados',
      id: String(params.token),
      shouldIncludeHeadersInResponse: true,
      preserveRedirect: true
    })
  }
}
