export interface IUpdateParams {
  /**
   * ID do grupo de produto
   */
  idGrupoProduto: number
}

export interface IUpdateBody {
  nome: string
  grupoProdutoPai: {
    id: number
  }
}
