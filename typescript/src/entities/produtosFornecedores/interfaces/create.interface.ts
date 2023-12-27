export interface ICreateBody {
  descricao?: string
  codigo?: string
  precoCusto?: number
  precoCompra?: number
  padrao?: boolean
  produto: { id: number }
  fornecedor: { id: number }
  garantia?: number
}

export interface ICreateResponse {
  data: { id: number }
}
