import { Entity } from '../@shared/entity'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'

/**
 * Entidade para interação com vendedores.
 *
 * @see https://developer.bling.com.br/referencia#/Vendedores
 */
export class Vendedores extends Entity {
  /**
   * Obtém vendedores.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Vendedores/get_vendedores
   */
  public async get(params?: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'vendedores',
      params: {
        pagina: params?.pagina,
        limite: params?.limite,
        nomeContato: params?.nomeContato,
        situacaoContato: params?.situacaoContato,
        idContato: params?.idContato,
        idLoja: params?.idLoja,
        dataAlteracaoInicial: this.prepareStringOrDateParam(
          params?.dataAlteracaoInicial
        ),
        dataAlteracaoFinal: this.prepareStringOrDateParam(
          params?.dataAlteracaoFinal
        )
      }
    })
  }

  /**
   * Obtém um vendedor.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Vendedores/get_vendedores__idVendedor_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'vendedores',
      id: String(params.idVendedor)
    })
  }
}
