import { Entity } from '../@shared/entity'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindSuccessResponse } from './interfaces/find.interface'

/**
 * Entidade para interação com borderôs.
 */
export class Borderos extends Entity {
  /**
   * Remove um borderô.
   *
   * @param params Parâmetros para a deleção (somente o ID).
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/delete_borderos__idBordero_
   */
  async delete(params: IDeleteParams): Promise<null> {
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
   * @returns {Promise<IFindSuccessResponse>} Os dados do borderô pesquisado.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Border%C3%B4s/get_borderos__idBordero_
   */
  async find(params: IFindParams): Promise<IFindSuccessResponse> {
    return await this.repository.show({
      endpoint: 'borderos',
      id: String(params.idBordero)
    })
  }
}
