export interface IFindParams {
  /**
   * ID do serviço
   */
  idLogisticaServico: number
}

export interface IFindResponse {
  data: {
    id?: number
    descricao: string
    codigo: string
    aliases: string[]
    ativo?: boolean
    freteItem: number
    estimativaEntrega: number
    idCodigoServico?: string
    nomeTransportador?: string
    logistica: { id: number }
    transportador: { id: number }
  }
}
