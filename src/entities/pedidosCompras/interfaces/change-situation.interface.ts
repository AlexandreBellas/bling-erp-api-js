import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID do pedido de compra
   */
  idPedidoCompra: number
}

export interface IChangeSituationBody {
  valor: ISituacao
}
