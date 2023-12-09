export interface IGetModuleActionsParams {
  /**
   * ID do módulo do sistema
   */
  idModuloSistema: number
}

export interface IGetModuleActionsResponse {
  data: {
    id: number
    nome: string
    descricao: string
  }[]
}
