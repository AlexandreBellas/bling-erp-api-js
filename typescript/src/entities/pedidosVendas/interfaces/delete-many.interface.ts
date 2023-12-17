export interface IDeleteManyParams {
  /**
   * IDs dos pedidos de vendas
   */
  idsPedidosVendas: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas: string[]
  }
}
