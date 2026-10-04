export interface IUpdateParams {
  /**
   * ID do estoque
   */
  idEstoque: number
}

export interface IUpdateBody {
  preco?: number
  /**
   * Preço unitário de custo.
   */
  precoCusto?: number
  observacoes?: string
}
