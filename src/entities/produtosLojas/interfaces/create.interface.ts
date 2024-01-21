export interface ICreateBody {
  codigo: string
  preco?: number
  precoPromocional?: number
  produto: { id: number }
  loja: { id: number }
  fornecedorLoja?: { id: number }
  marcaLoja?: { id: number }
  categoriasProdutos?: { id: number }[]
}

export interface ICreateResponse {
  data: {
    id: number
    categoriasProdutos?: { id?: number }[]
  }
}
