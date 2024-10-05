export interface IFindParams {
  /**
   * ID do grupo de produto
   */
  idGrupoProduto: number
}

interface GruposProdutosDadosDTO {
  id?: number
  nome: string
  grupoProdutoPai?: {
    id: number
    nome?: string
  }
}

interface GruposProdutosGrupoProdutoPaiDTO {
  id: number
  nome?: string
}

export interface IFindResponse {
  data: GruposProdutosDadosDTO | GruposProdutosGrupoProdutoPaiDTO
}
