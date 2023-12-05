import { Entity } from '../@shared/entity'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com Produtos.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos
 */
export class Produtos extends Entity {
  /**
   * Obtém produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos/get_produtos
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'produtos',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        criterio: params?.criterio,
        tipo: params?.tipo,
        idComponente: params?.idComponente,
        dataInclusaoInicial: params?.dataInclusaoInicial,
        dataInclusaoFinal: params?.dataInclusaoFinal,
        dataAlteracaoInicial: params?.dataAlteracaoInicial,
        dataAlteracaoFinal: params?.dataAlteracaoFinal,
        idCategoria: params?.idCategoria,
        idLoja: params?.idLoja,
        codigo: params?.codigo,
        nome: params?.nome,
        idsProdutos: params?.idsProdutos,
      }
    })
  }
}
