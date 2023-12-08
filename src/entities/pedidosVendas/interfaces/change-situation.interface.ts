import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationParams {
  /**
   * ID do pedido de venda
   */
  idPedidoVenda: number
  /**
   * ID da situação do pedido de venda
   */
  idSituacao: ISituacao
}
