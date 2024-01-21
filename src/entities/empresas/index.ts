import { Entity } from '../@shared/entity'
import { IMeResponse } from './interfaces/me.interface'

/**
 * Entidade para interação com empresas.
 *
 * @see https://developer.bling.com.br/referencia#/Empresas
 */
export class Empresas extends Entity {
  /**
   * Obtém dados básicos da empresa.
   *
   * @returns {Promise<IMeResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Empresas/get_empresas_me_dados_basicos
   */
  public async me(): Promise<IMeResponse> {
    return await this.repository.index({
      endpoint: 'empresas/me/dados-basicos'
    })
  }
}
