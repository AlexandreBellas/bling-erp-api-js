export interface IGetBalancesParams {
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
  /**
   * Códigos dos produtos
   */
  codigos?: string[]
}

export interface IGetBalancesResponse {
  data: {
    produto: { id: number }
    saldoFisicoTotal: number
    saldoVirtualTotal: number
    depositos: {
      id: number
      saldoFisico: number
      saldoVirtual: number
    }[]
  }[]
}
