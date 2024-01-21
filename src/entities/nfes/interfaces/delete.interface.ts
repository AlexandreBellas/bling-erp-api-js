export interface IDeleteParams {
  /**
   * IDs das notas fiscais
   */
  idsNotas: number[]
}

export interface IDeleteResponse {
  data: {
    alertas: string[]
    idsExcluidos: number[]
  }
}
