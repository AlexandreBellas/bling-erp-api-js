import { Entity } from '../@shared/entity'
import {
  IChangeSituationBody,
  IChangeSituationParams
} from './interfaces/change-situation.interface'
import { ICreateBody, ICreateResponse } from './interfaces/create.interface'
import {
  IDeleteManyParams,
  IDeleteManyResponse
} from './interfaces/delete-many.interface'
import { IDeleteParams } from './interfaces/delete.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateParams
} from './interfaces/update.interface'

/**
 * Entidade para interação com propostas comerciais.
 *
 * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais
 */
export class PropostasComerciais extends Entity {
  /**
   * Remove múltiplas propostas comerciais.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteManyResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/delete_propostas_comerciais
   */
  public async deleteMany(
    params: IDeleteManyParams
  ): Promise<IDeleteManyResponse> {
    return await this.repository.destroy({
      endpoint: 'propostas-comerciais',
      id: '',
      params: { idsPropostasComerciais: params.idsPropostasComerciais }
    })
  }

  /**
   * Remove uma proposta comercial.
   *
   * @param {IDeleteParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/delete_propostas_comerciais__idPropostaComercial_
   */
  public async delete(params: IDeleteParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'propostas-comerciais',
      id: String(params.idPropostaComercial)
    })
  }

  /**
   * Obtém propostas comerciais.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/get_propostas_comerciais
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'propostas-comerciais',
      params: {
        situacao: params?.situacao,
        idContato: params?.idContato,
        dataInicial: this.prepareStringOrDateParam(
          params?.dataInicial,
          true
        ),
        dataFinal: this.prepareStringOrDateParam(
          params?.dataFinal,
          true
        ),
        pagina: params?.pagina,
        limite: params?.limite,
      }
    })
  }

  /**
   * Obtém uma proposta comercial.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/get_propostas_comerciais__idPropostaComercial_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'propostas-comerciais',
      id: String(params.idPropostaComercial)
    })
  }

  /**
   * Altera a situação de uma proposta comercial.
   *
   * @param {IChangeSituationParams & IChangeSituationBody} params Parâmetros da alteração.
   *
   * @returns {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/patch_propostas_comerciais__idPropostaComercial__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams & IChangeSituationBody
  ): Promise<null> {
    const { idPropostaComercial, ...body } = params
    return await this.repository.update({
      endpoint: 'propostas-comerciais',
      id: `${idPropostaComercial}/situacoes`,
      body
    })
  }

  /**
   * Cria uma proposta comercial.
   *
   * @param {ICreateBody} body O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/post_propostas_comerciais
   */
  public async create(body: ICreateBody): Promise<ICreateResponse> {
    return await this.repository.store({
      endpoint: 'propostas-comerciais',
      body
    })
  }

  /**
   * Altera uma proposta comercial.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<null>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Propostas%20Comerciais/put_propostas_comerciais__idPropostaComercial_
   */
  public async update(
    params: IUpdateParams & IUpdateBody
  ): Promise<null> {
    const { idPropostaComercial, ...body } = params

    return await this.repository.replace({
      endpoint: 'propostas-comerciais',
      id: String(idPropostaComercial),
      body
    })
  }
}
