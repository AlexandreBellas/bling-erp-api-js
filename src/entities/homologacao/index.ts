import { Entity } from '../@shared/entity'
import {
  IChangeSituationBody,
  IChangeSituationHeaders,
  IChangeSituationParams,
  IChangeSituationResponse
} from './interfaces/change-situation.interface'
import {
  ICreateBody,
  ICreateHeaders,
  ICreateResponse
} from './interfaces/create.interface'
import {
  IDeleteHeaders,
  IDeleteParams,
  IDeleteResponse
} from './interfaces/delete.interface'
import { IGetResponse } from './interfaces/get.interface'
import {
  IUpdateBody,
  IUpdateHeaders,
  IUpdateParams,
  IUpdateResponse
} from './interfaces/update.interface'

/**
 * Entidade para interação com homologação.
 *
 * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o
 */
export class Homologacao extends Entity {
  /**
   * Remove o produto da homologação.
   *
   * Será retornado, no objeto de retorno, a _hash_ de homologação dentro da
   * propriedade `headers`.
   *
   * @param {IDeleteParams & IDeleteHeaders} params Parâmetros da remoção.
   *
   * @returns {Promise<IDeleteResponse>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o/delete_homologacao_produtos__idProdutoHomologacao_
   */
  public async delete(
    params: IDeleteParams & IDeleteHeaders
  ): Promise<IDeleteResponse> {
    return await this.repository.destroy({
      endpoint: 'homologacao/produtos',
      id: String(params.idProdutoHomologacao),
      headers: {
        'x-bling-homologacao': params.hash
      },
      shouldIncludeHeadersInResponse: true
    })
  }

  /**
   * Obtém o produto da homologação.
   *
   * @param {IGetHeaders} params Os parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o/get_homologacao_produtos
   */
  public async get(): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'homologacao/produtos',
      shouldIncludeHeadersInResponse: true
    })
  }

  /**
   * Altera a situação do produto da homologação.
   *
   * @param {IChangeSituationParams & IChangeSituationHeaders & IChangeSituationBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IChangeSituationResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o/patch_homologacao_produtos__idProdutoHomologacao__situacoes
   */
  public async changeSituation(
    params: IChangeSituationParams &
      IChangeSituationHeaders &
      IChangeSituationBody
  ): Promise<IChangeSituationResponse> {
    const { idProdutoHomologacao, hash, ...body } = params

    return await this.repository.update({
      endpoint: 'homologacao/produtos',
      id: String(idProdutoHomologacao),
      body,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
  }

  /**
   * Cria um contrato.
   *
   * @param {ICreateHeaders & ICreateBody} params O conteúdo para a criação.
   *
   * @returns {Promise<ICreateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o/post_homologacao_produtos
   */
  public async create(
    params: ICreateHeaders & ICreateBody
  ): Promise<ICreateResponse> {
    const { hash, ...body } = params
    return await this.repository.store({
      endpoint: 'homologacao/produtos',
      body,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
  }

  /**
   * Altera o produto da homologação.
   *
   * @param {IUpdateParams & IUpdateHeaders & IUpdateBody} params Os parâmetros da atualização.
   *
   * @return {Promise<IUpdateResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Homologa%C3%A7%C3%A3o/put_homologacao_produtos__idProdutoHomologacao_
   */
  public async update(
    params: IUpdateParams & IUpdateHeaders & IUpdateBody
  ): Promise<IUpdateResponse> {
    const { idProdutoHomologacao, hash, ...body } = params

    return await this.repository.replace({
      endpoint: 'homologacao/produtos',
      id: String(idProdutoHomologacao),
      body,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
  }

  /**
   * Executa a homologação do aplicativo.
   *
   * @returns {Promise<void>}
   *
   * @see https://developer.bling.com.br/homologacao
   */
  public async execute(): Promise<void> {
    // Passo 1: GET
    const getResponse = await this.get()

    // Passo 2: POST
    const postResponse = await this.create({
      hash: getResponse.headers['x-bling-homologacao'],
      ...getResponse.data
    })

    // Passo 3: PUT
    const { id: patchId, ...patchBody } = postResponse.data
    const patchResponse = await this.update({
      hash: postResponse.headers['x-bling-homologacao'],
      idProdutoHomologacao: patchId,
      ...patchBody,
      nome: 'Copo'
    })

    // Passo 4: PATCH
    const putResponse = await this.changeSituation({
      hash: patchResponse.headers['x-bling-homologacao'],
      idProdutoHomologacao: postResponse.data.id,
      situacao: 'I'
    })

    // Passo 5: DELETE
    await this.delete({
      hash: putResponse.headers['x-bling-homologacao'],
      idProdutoHomologacao: postResponse.data.id
    })
  }
}
