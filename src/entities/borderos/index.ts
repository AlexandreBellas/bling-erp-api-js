import { Entity } from '../@shared/entity'
import { IDeleteParams, IDeleteResponse } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'

/**
 * Entidade para interação com borderôs.
 *
 * @see https://developer.bling.com.br/referencia#/Border%C3%B4s
 */
export class Borderos extends Entity {
  /**
   * Remove um borderô.
   *
   * @param params Parâmetros para a deleção (somente o ID).
   *
   * @returns {Promise<IDeleteResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/delete_borderos__idBordero_
   */
  async delete(params: IDeleteParams): Promise<IDeleteResponse> {
    return await this.repository.destroy({
      endpoint: 'borderos',
      id: String(params.idBordero)
    })
  }

  /**
   * Encontra um borderô.
   *
   * @param params Parâmetros para a busca (somente o ID).
   *
   * @returns {Promise<IFindResponse>} Os dados do borderô pesquisado.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/get_borderos__idBordero_
   */
  async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'borderos',
      id: String(params.idBordero)
    })
  }
}
