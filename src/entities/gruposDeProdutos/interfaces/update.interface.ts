export interface IUpdateParams {
  /**
   * ID do grupo de produto
   */
  idGrupoProduto: number
}

export interface IUpdateBody {
  id?: number
  nome: string
  grupoProdutoPai?: {
    id: number
  }
}
