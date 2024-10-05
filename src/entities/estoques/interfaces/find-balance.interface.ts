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
    produto: { id: number }
    saldoFisicoTotal: number
    saldoVirtualTotal: number
  }[]
}
