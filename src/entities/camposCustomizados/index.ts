import { BaseEntity } from '../@shared/base.entity'
import { IDeleteParams } from './interfaces/delete.interface'
import {
  IFindByModuleParams,
  IFindByModuleSingleResponse
} from './interfaces/find-by-module.interface'
import { IGetModuleSingleResponse } from './interfaces/get-modules.interface'
import { IGetTypeSingleResponse } from './interfaces/get-types.interface'

/**
 * Entidade para interação com campos customizados.
 */
export class CamposCustomizados extends BaseEntity {
  /**
   * Remove um campo customizado.
   *
   * @param params Parâmetros da deleção.
   *
   * @returns {null} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   */
  async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'campos-customizados',
      id: String(params.id)
    })
  }

  /**
   * Obtém módulos que possuem campos customizados.
   *
   * @returns {IGetModuleSingleResponse[]}
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
   * @returns {IGetTypeSingleResponse[]}
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
   * @returns {IFindByModuleSingleResponse[]}
   * @throws {BlingApiException|BlingInternalException}
   */
  async findByModule(
    params: IFindByModuleParams
  ): Promise<IFindByModuleSingleResponse[]> {
    return await this.repository.show({
      endpoint: 'campos-customizados/modulos',
      id: String(params.id),
      params: {
        pagina: params.pagina,
        limite: params.limite
      }
    })
  }

  // continuar daqui

  /**
   * Obtém um campo customizado.
   */
  async find() {}

  /**
   * Altera a situação de um campo customizado.
   */
  async updateSituation() {}

  /**
   * Cria um campo customizado.
   */
  async create() {}

  /**
   * Altera um campo customizado.
   */
  async update() {}
}
