export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   * ID do produto
   */
  idProduto?: number
  /**
   * ID do contato do tipo fornecedor
   */
  idFornecedor?: number
}

export interface IGetResponse {
  data: {
    id?: number
    descricao?: string
    codigo?: string
    precoCusto?: number
    precoCompra?: number
    padrao?: boolean
    produto?: { id: number }
    fornecedor?: { id: number }
  }[]
}
