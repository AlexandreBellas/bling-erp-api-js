export interface IFindParams {
  /**
   * ID do vínculo do produto com a loja
   */
  idProdutoLoja: number
}

export interface IFindResponse {
  data: {
    id?: number
    codigo: string
    preco?: number
    precoPromocional?: number
    produto: { id: number }
    loja: { id: number }
    fornecedorLoja?: { id: number }
    marcaLoja?: { id: number }
    categoriasProdutos?: { id: number }[]
  }
}
