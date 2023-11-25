import { Entity } from '../@shared/entity'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com Categorias - Receitas e Despesas.
 */
export class CategoriasReceitasDespesas extends Entity {
  /**
   * Obtém categorias de receitas e despesas.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/get_categorias_receitas_despesas
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'categorias/receitas-despesas',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        tipo: params?.tipo,
        situacao: params?.situacao
      }
    })
  }

  /**
   * Obtém uma categoria de receita e despesa.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Categorias%20-%20Receitas%20e%20Despesas/get_categorias_receitas_despesas__idCategoria_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'categorias/receitas-despesas',
      id: String(params.idCategoria)
    })
  }
}
