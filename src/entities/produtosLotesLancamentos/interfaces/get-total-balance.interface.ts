export interface ILotesProdutoDTO {
  id: number
}

export interface ISaldoSomaLotesTodosDepositosDTO {
  produto?: ILotesProdutoDTO
  /**
   * Soma dos saldos de lotes
   */
  saldoTotal?: number
}

export interface IGetTotalBalanceParams {
  /**
   * ID do produto
   */
  idProduto: number
}

export interface IGetTotalBalanceResponse {
  data?: ISaldoSomaLotesTodosDepositosDTO
}
