export interface IGetParams {
  /**
   * O nome do grupo
   */
  nome?: string
  /**
   * O nome do grupo pai
   */
  nomePai?: string
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
}

export interface IGetResponse {
  data: {
    id?: number
    nome: string
    grupoProdutoPai?: {
      id: number
      nome?: string
    }
  }[]
}
