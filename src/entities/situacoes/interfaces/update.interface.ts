export interface IUpdateParams {
  /**
   * ID da situação
   */
  idSituacao: number
}

export interface IUpdateBody {
  idModuloSistema?: number
  nome?: string
  idHerdado?: number
  cor?: string
}

export interface IUpdateResponse {
  data: { id: number }
}
