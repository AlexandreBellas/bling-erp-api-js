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

export interface IGetBalanceParams {
  /**
   * ID do produto
   */
  idProduto: number
  /**
   * ID do lote
   */
  idLote: number
  /**
   * ID do depósito
   */
  idDeposito: number
}

export interface IGetBalanceResponse {
  data?: ISaldoLoteDTO
}
