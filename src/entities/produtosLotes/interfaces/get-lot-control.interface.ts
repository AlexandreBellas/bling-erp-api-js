export interface IProdutoControlaLotesDTO {
  /**
   * ID do produto
   */
  idProduto: number
  /**
   * Indica se o produto controla lote
   */
  controlaLote?: boolean
}

export interface IGetLotControlParams {
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
}

export interface IGetLotControlResponse {
  data?: IProdutoControlaLotesDTO[]
}
