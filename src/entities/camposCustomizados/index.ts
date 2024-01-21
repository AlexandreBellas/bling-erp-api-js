import { Entity } from '../@shared/entity'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IFindByModuleParams,
  IFindByModuleResponse
} from './interfaces/find-by-module.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetModuleResponse } from './interfaces/get-modules.interface'
import { IGetTypeResponse } from './interfaces/get-types.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com campos customizados.
 *
 * @see https://developer.bling.com.br/referencia#/Campos%20Customizados
 */
export class CamposCustomizados extends Entity {
  /**
   * Remove um campo customizado.
   *
   * @param params Parâmetros da deleção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/delete_campos_customizados__idCampoCustomizado_
   */
  async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'campos-customizados',
      id: String(params.idCampoCustomizado)
    })
  }

  /**
   * Obtém módulos que possuem campos customizados.
   *
   * @returns {Promise<IGetModuleResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/get_campos_customizados_modulos
   */
  async getModules(): Promise<IGetModuleResponse> {
    return await this.repository.index({
      endpoint: 'campos-customizados/modulos'
    })
  }

  /**
   * Obtém tipos de campos customizados.
   *
   * @returns {Promise<IGetTypeResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/get_campos_customizados_tipos
   */
  async getTypes(): Promise<IGetTypeResponse> {
    return await this.repository.index({
      endpoint: 'campos-customizados/tipos'
    })
  }

  /**
   * Obtém campos customizados por módulo.
   *
   * @param {IFindByModuleParams} params Parâmetros da busca
   *
   * @returns {Promise<IFindByModuleResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/get_campos_customizados_modulos__idModulo_
   */
  async findByModule(
    params: IFindByModuleParams
  ): Promise<IFindByModuleResponse> {
    return await this.repository.show({
      endpoint: 'campos-customizados/modulos',
      id: String(params.idModulo),
      params: {
        pagina: params.pagina,
        limite: params.limite
      }
    })
  }

  /**
   * Obtém um campo customizado.
   *
   * @returns {Promise<IFindParams>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/get_campos_customizados__idCampoCustomizado_
   */
  async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'campos-customizados',
      id: String(params.idCampoCustomizado)
    })
  }

  /**
   * Altera a situação de um campo customizado.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/patch_campos_customizados__idCampoCustomizado__situacoes
   */
  async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    return await this.repository.update({
      endpoint: 'campos-customizados',
      id: `${params.idCampoCustomizado}/situacoes`,
      body: { situacao: params.situacao }
    })
  }

  /**
   * Cria um campo customizado.
   *
   * @param {ICreateBody} body O corpo da requisição.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/post_campos_customizados
   */
  async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'campos-customizados',
      body
    })
  }

  /**
   * Altera um campo customizado.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização
   *
   * @returns {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Campos%20Customizados/put_campos_customizados__idCampoCustomizado_
   */
  async update(params: IUpdateParams & IUpdateBody): Promise<IUpdateResponse> {
    const { idCampoCustomizado, ...body } = params

    return await this.repository.update({
      endpoint: 'campos-customizados',
      id: String(idCampoCustomizado),
      body
    })
  }
}
