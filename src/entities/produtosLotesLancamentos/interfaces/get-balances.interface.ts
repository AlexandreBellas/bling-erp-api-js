export interface ILotesProdutoDTO {
  id: number
}

export interface ILotesDepositoDTO {
  id: number
}

export interface ISaldoLoteDTO {
  /**
   * ID do lote
   */
  idLote?: number
  produto?: ILotesProdutoDTO
  deposito?: ILotesDepositoDTO
  /**
   * Saldo atual do lote
   */
  saldoAtual?: number
}

export interface IGetBalancesParams {
  /**
   * ID do produto
   */
  idProduto: number
  /**
   * ID do depósito
   */
  idDeposito: number
  /**
   * IDs dos lotes
   */
  idsLotes: number[]
}

export interface IGetBalancesResponse {
  data?: ISaldoLoteDTO[]
}
