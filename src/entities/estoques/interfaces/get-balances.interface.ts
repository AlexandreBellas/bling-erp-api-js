export interface IGetBalancesParams {
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
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
