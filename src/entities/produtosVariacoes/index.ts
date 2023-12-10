import { Entity } from '../@shared/entity'
import {
  IChangeAttributeNameBody,
  IChangeAttributeNameParams,
  IChangeAttributeNameResponse
} from './interfaces/change-attribute-name.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGenerateCombinationsBody,
  IGenerateCombinationsResponse
} from './interfaces/generate-combinations.interface'

/**
 * Entidade para interação com Produtos - Variações.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Varia%C3%A7%C3%B5es
 */
export class ProdutosVariacoes extends Entity {
  /**
   * Obtém o produto e variações.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Varia%C3%A7%C3%B5es/get_produtos_variacoes__idProdutoPai_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos/variacoes',
      id: String(params.idProdutoPai)
    })
  }

  /**
   * Altera o nome do atributo nas variações.
   *
   * @param {IChangeAttributeNameParams & IChangeAttributeNameBody} params Parâmetros da alteração.
   *
   * @returns {Promise<IChangeAttributeNameResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Varia%C3%A7%C3%B5es/patch_produtos_variacoes__idProdutoPai__atributos
   */
  public async changeAttributeName(
    params: IChangeAttributeNameParams & IChangeAttributeNameBody
  ): Promise<IChangeAttributeNameResponse> {
    const { idProdutoPai, ...body } = params
    return await this.repository.update({
      endpoint: 'produtos/variacoes',
      id: `${idProdutoPai}/atributos`,
      body
    })
  }

  /**
   * Retorna o produto pai com combinações de novas variações.
   *
   * @param {IGenerateCombinationsBody} params O conteúdo para a geração das combinações.
   *
   * @returns {Promise<IGenerateCombinationsResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Varia%C3%A7%C3%B5es/post_produtos_variacoes_atributos_gerar_combinacoes
   */
  public async generateCombinations(
    params: IGenerateCombinationsBody
  ): Promise<IGenerateCombinationsResponse> {
    return await this.repository.store({
      endpoint: 'produtos/variacoes/atributos/gerar-combinacoes',
      body: params
    })
  }
}
