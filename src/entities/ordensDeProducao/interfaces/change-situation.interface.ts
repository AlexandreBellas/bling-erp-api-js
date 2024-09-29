export interface IChangeSituationParams {
  /**
   * ID da ordem de produção
   */
  idOrdemProducao: number
}

export interface IChangeSituationBody {
  idSituacao: number
  quantidade?: number
  observacoes?: string
  considerarPerdas?: boolean
}
