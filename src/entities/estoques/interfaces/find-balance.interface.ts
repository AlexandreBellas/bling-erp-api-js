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
   * Códigos dos produtos
   */
  codigos?: string[]
}

export interface IFindBalanceResponse {
  data: {
    produto: { id: number; codigo?: string }
    saldoFisicoTotal: number
    saldoVirtualTotal: number
  }[]
}
