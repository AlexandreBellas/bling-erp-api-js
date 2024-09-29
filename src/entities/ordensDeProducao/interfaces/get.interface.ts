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
   * IDs das situações
   */
  idsSituacoes?: number[]
}

export interface IGetResponse {
  data: {
    id: number
    dataPrevisaoInicio?: string
    dataPrevisaoFinal?: string
    dataInicio?: string
    dataFim?: string
    numero: number
    responsavel?: string
    deposito: {
      idDestino?: number
      idOrigem?: number
    }
    situacao: {
      id: number
      valor: number
      nome: string
    }
  }[]
}
