import { Entity } from '../@shared/entity'
import { IDeleteManyParams } from './interfaces/delete-many.interface'
import { IGetParams, IGetResponse } from './interfaces/get.interface'
import { IFindParams, IFindResponse } from './interfaces/find.interface'
import {
  IGetLotControlParams,
  IGetLotControlResponse
} from './interfaces/get-lot-control.interface'
import {
  IUpdateManyBody,
  IUpdateManyResponse
} from './interfaces/update-many.interface'
import { IUpdateParams, IUpdateBody } from './interfaces/update.interface'
import { IDisableLotControlParams } from './interfaces/disable-lot-control.interface'
import {
  IChangeStatusParams,
  IChangeStatusBody
} from './interfaces/change-status.interface'

/**
 * Entidade para interação com lotes de produtos.
 *
 * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes
 */
export class ProdutosLotes extends Entity {
  /**
   * Remove lotes de produtos.
   *
   * @param {IDeleteManyParams} params Parâmetros da remoção.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/delete_produtos_lotes
   */
  public async deleteMany(params: IDeleteManyParams): Promise<null> {
    return await this.repository.destroy({
      endpoint: 'produtos/lotes',
      id: '',
      params: {
        idsLotes: params.idsLotes
      }
    })
  }

  /**
   * Obtém lotes de produtos.
   *
   * @param {IGetParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/get_produtos_lotes
   */
  public async get(params: IGetParams): Promise<IGetResponse> {
    return await this.repository.index({
      endpoint: 'produtos/lotes',
      params: {
        pagina: params.pagina,
        limite: params.limite,
        idsProdutos: params.idsProdutos,
        idsLotes: params.idsLotes,
        idsDepositos: params.idsDepositos,
        codigosLotes: params.codigosLotes,
        status: params.status,
        dataValidadeInicial: this.prepareStringOrDateParam(
          params.dataValidadeInicial
        ),
        dataValidadeFinal: this.prepareStringOrDateParam(
          params.dataValidadeFinal
        ),
        dataFabricacaoInicial: this.prepareStringOrDateParam(
          params.dataFabricacaoInicial
        ),
        dataFabricacaoFinal: this.prepareStringOrDateParam(
          params.dataFabricacaoFinal
        ),
        dataCriacaoInicial: this.prepareStringOrDateParam(
          params.dataCriacaoInicial,
          true
        ),
        dataCriacaoFinal: this.prepareStringOrDateParam(
          params.dataCriacaoFinal,
          true
        )
      }
    })
  }

  /**
   * Obtém um lote de um produto.
   *
   * @param {IFindParams} params Parâmetros da busca.
   *
   * @returns {Promise<IFindResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/get_produtos_lotes__idLote_
   */
  public async find(params: IFindParams): Promise<IFindResponse> {
    return await this.repository.show({
      endpoint: 'produtos/lotes',
      id: String(params.idLote)
    })
  }

  /**
   * Obtém a informação se determinados produtos possuem controle de lote.
   *
   * @param {IGetLotControlParams} params Parâmetros da busca.
   *
   * @returns {Promise<IGetLotControlResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/get_produtos_lotes_controla_lote
   */
  public async getLotControl(
    params: IGetLotControlParams
  ): Promise<IGetLotControlResponse> {
    return await this.repository.index({
      endpoint: 'produtos/lotes/controla-lote',
      params: {
        idsProdutos: params.idsProdutos
      }
    })
  }

  /**
   * Salva lotes de produtos.
   *
   * @param {IUpdateManyBody} body Os parâmetros da atualização.
   *
   * @returns {Promise<IUpdateManyResponse>}
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/put_produtos_lotes
   */
  public async updateMany(body: IUpdateManyBody): Promise<IUpdateManyResponse> {
    return await this.repository.replace({
      endpoint: 'produtos/lotes',
      id: '',
      body
    })
  }

  /**
   * Altera um lote de um produto.
   *
   * @param {IUpdateParams & IUpdateBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/put_produtos_lotes__idLote_
   */
  public async update(params: IUpdateParams & IUpdateBody): Promise<null> {
    const { idLote, ...body } = params
    return await this.repository.replace({
      endpoint: 'produtos/lotes',
      id: String(idLote),
      body
    })
  }

  /**
   * Desativa controle de lotes para o produto.
   *
   * @param {IDisableLotControlParams} params Parâmetros da operação.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/post_produtos__idProduto__lotes_controla_lote_desativar
   */
  public async disableLotControl(
    params: IDisableLotControlParams
  ): Promise<null> {
    return await this.repository.store({
      endpoint: `produtos/${params.idProduto}/lotes/controla-lote/desativar`,
      body: {}
    })
  }

  /**
   * Altera o status de um lote do produto.
   *
   * @param {IChangeStatusParams & IChangeStatusBody} params Os parâmetros da atualização.
   *
   * @returns {Promise<null>} Não há retorno.
   * @throws {BlingApiException|BlingInternalException}
   *
   * @see https://developer.bling.com.br/referencia#/Produtos%20-%20Lotes/patch_produtos_lotes__idLote__status
   */
  public async changeStatus(
    params: IChangeStatusParams & IChangeStatusBody
  ): Promise<null> {
    const { idLote, ...body } = params
    return await this.repository.update({
      endpoint: 'produtos/lotes',
      id: `${idLote}/status`,
      body
    })
  }
}
