export interface IUpdateParams {
  /**
   * ID do produto fornecedor
   */
  idProdutoFornecedor: number
}

export interface IUpdateBody {
  descricao?: string
  codigo?: string
  precoCusto?: number
  precoCompra?: number
  padrao?: boolean
  produto: { id: number }
  fornecedor?: { id?: number }
  garantia?: number
}

export interface IUpdateResponse {
  data: { id: number }
}
