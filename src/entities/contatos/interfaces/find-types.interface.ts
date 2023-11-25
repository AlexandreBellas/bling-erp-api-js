export interface IFindTypesParams {
  /**
   * ID do contato
   */
  idContato: number
}

export interface IFindTypesResponse {
  data: {
    id: number
    descricao: string
  }[]
}
