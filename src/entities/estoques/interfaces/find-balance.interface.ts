export interface IFindBalanceParams {
  /**
   * ID do depósito
   */
  idDeposito: number
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
  /**
   * Código do produto
   */
  codigo?: string
}

export interface IFindBalanceResponse {
  data: {
    produto: { id: number }
    saldoFisicoTotal: number
    saldoVirtualTotal: number
  }[]
}
