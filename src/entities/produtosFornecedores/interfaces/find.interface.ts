export interface IFindParams {
  /**
   * ID do produto fornecedor
   */
  idProdutoFornecedor: number
}

export interface IFindResponse {
  data: {
    id?: number
    descricao?: string
    codigo?: string
    precoCusto?: number
    precoCompra?: number
    padrao?: boolean
    produto: { id: number }
    fornecedor: { id: number }
    garantia?: number
  }
}
