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
   * ID da loja
   */
  idLoja?: number
  /**
   * ID da categoria do produto vinculada à loja
   */
  idCategoriaProduto?: number
  /**
   * Data de alteração inicial
   */
  dataAlteracaoInicial?: Date | string
  /**
   * Data de alteração final
   */
  dataAlteracaoFinal?: Date | string
}

export interface IGetResponse {
  data: {
    categoriasProdutos: {
      id: 12345678
    }[]
  }[]
}
