export interface IUpdateParams {
  /**
   * ID do vínculo do produto com a loja
   */
  idProdutoLoja: number
}

export interface IUpdateBody {
  codigo: string
  preco?: number
  precoPromocional?: number
  produto: { id: number }
  loja: { id: number }
  fornecedorLoja?: { id: number }
  marcaLoja?: { id: number }
  categoriasProdutos?: { id: number }[]
}

export interface IUpdateResponse {
  data: {
    id: number
    categoriasProdutos?: { id?: number }[]
  }
}
