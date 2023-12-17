import { Entity } from '../@shared/entity'
import {
  IGetModuleActionsParams,
  IGetModuleActionsResponse
} from './interfaces/get-module-actions.interface'
import {
  IGetModuleSituationsParams,
  IGetModuleSituationsResponse
} from './interfaces/get-module-situations.interface'
import {
  IGetModuleTransitionsParams,
  IGetModuleTransitionsResponse
} from './interfaces/get-module-transitions.interface'
import { IGetModulesResponse } from './interfaces/get-modules.interface'

/**
 * Entidade para interação com Situações - Módulos.
 *
 * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20M%C3%B3dulos
 */
export class SituacoesModulos extends Entity {
  /**
   * Obtém módulos.
   *
   * @returns {Promise<IGetModulesResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20M%C3%B3dulos/get_situacoes_modulos
   */
  public async getModules(): Promise<IGetModulesResponse> {
    return await this.repository.index({
      endpoint: 'situacoes/modulos'
    })
  }

  /**
   * Obtém situações de um módulo.
   *
   * @param {IGetModuleSituationsParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetModuleSituationsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20M%C3%B3dulos/get_situacoes_modulos__idModuloSistema_
   */
  public async getModuleSituations(
    params: IGetModuleSituationsParams
  ): Promise<IGetModuleSituationsResponse> {
    return await this.repository.show({
      endpoint: 'situacoes/modulos',
      id: String(params.idModuloSistema)
    })
  }

  /**
   * Obtém as ações de um módulo.
   *
   * @param {IGetModuleActionsParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetModuleActionsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20M%C3%B3dulos/get_situacoes_modulos__idModuloSistema__acoes
   */
  public async getModuleActions(
    params: IGetModuleActionsParams
  ): Promise<IGetModuleActionsResponse> {
    return await this.repository.show({
      endpoint: 'situacoes/modulos',
      id: `${params.idModuloSistema}/acoes`
    })
  }

  /**
   * Obtém as transições de um módulo.
   *
   * @param {IGetModuleTransitionsParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetModuleTransitionsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Situa%C3%A7%C3%B5es%20-%20M%C3%B3dulos/get_situacoes_modulos__idModuloSistema__transicoes
   */
  public async getModuleTransitions(
    params: IGetModuleTransitionsParams
  ): Promise<IGetModuleTransitionsResponse> {
    return await this.repository.show({
      endpoint: 'situacoes/modulos',
      id: `${params.idModuloSistema}/transicoes`
    })
  }
}
