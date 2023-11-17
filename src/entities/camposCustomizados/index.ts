import { BaseEntity } from '../@shared/base.entity'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IFindByModuleParams,
  IFindByModuleSingleResponse
} from './interfaces/find-by-module.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetModuleSingleResponse } from './interfaces/get-modules.interface'
import { IGetTypeSingleResponse } from './interfaces/get-types.interface'
import {
  IUpdateBody,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com campos customizados.
 */
export class CamposCustomizados extends BaseEntity {
  /**
   * Remove um campo customizado.
   *
   * @param params Parâmetros da deleção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
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
   * @returns {Promise<IGetModuleSingleResponse[]>}
   * @throws {BlingApiException|BlingInternalException}
   */
  async getModules(): Promise<IGetModuleSingleResponse[]> {
    return await this.repository.index({
      endpoint: 'campos-customizados/modulos'
    })
  }

  /**
   * Obtém tipos de campos customizados.
   *
   * @returns {Promise<IGetTypeSingleResponse[]>}
   * @throws {BlingApiException|BlingInternalException}
   */
  async getTypes(): Promise<IGetTypeSingleResponse[]> {
    return await this.repository.index({
      endpoint: 'campos-customizados/tipos'
    })
  }

  /**
   * Obtém campos customizados por módulo.
   *
   * @param {IFindByModuleParams} params Parâmetros da busca
   *
   * @returns {Promise<IFindByModuleSingleResponse[]>}
   * @throws {BlingApiException|BlingInternalException}
   */
  async findByModule(
    params: IFindByModuleParams
  ): Promise<IFindByModuleSingleResponse[]> {
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
