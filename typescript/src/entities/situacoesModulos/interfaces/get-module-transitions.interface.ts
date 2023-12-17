export interface IGetModuleTransitionsParams {
  /**
   * ID do módulo do sistema
   */
  idModuloSistema: number
}

export interface IGetModuleTransitionsResponse {
  data: {
    id: number
    ativo?: boolean
    acoes?: number[]
    modulo?: { id: number }
    situacaoOrigem: {
      id: number
      nome: string
    }
    situacaoDestino: {
      id: number
      nome: string
    }
  }[]
}
