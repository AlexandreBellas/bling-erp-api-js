export interface IFindParams {
  /**
   * ID do grupo de produto
   */
  idGrupoProduto: number
}

interface IGruposProdutosDadosDTO {
  id?: number
  nome: string
  grupoProdutoPai?: {
    id: number
    nome?: string
  }
}

interface IGruposProdutosGrupoProdutoPaiDTO {
  id: number
  nome?: string
}

export interface IFindResponse {
  data: IGruposProdutosDadosDTO | IGruposProdutosGrupoProdutoPaiDTO
}
