export interface IGetModuleSituationsParams {
  /**
   * ID do módulo do sistema
   */
  idModuloSistema: number
}

export interface IGetModuleSituationsResponse {
  data: {
    id: number
    nome: string
    idHerdado?: number
    cor?: string
  }[]
}
