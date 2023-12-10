export interface IFindParams {
  /**
   * ID da situação
   */
  idSituacao: number
}

export interface IFindResponse {
  data: {
    id: number
    nome: string
    idHerdado?: number
    cor?: string
  }
}
