export interface ILotesProdutoDTO {
  id: number
}

export interface ILotesDepositoDTO {
  id: number
}

export interface ISaldoSomaLotesDTO {
  produto?: ILotesProdutoDTO
  deposito?: ILotesDepositoDTO
  /**
   * Soma dos saldos de lotes
   */
  saldoTotal?: number
}

export interface IGetBalanceSumParams {
  /**
   * ID do produto
   */
  idProduto: number
  /**
   * ID do depósito
   */
  idDeposito: number
}

export interface IGetBalanceSumResponse {
  data?: ISaldoSomaLotesDTO[]
}
