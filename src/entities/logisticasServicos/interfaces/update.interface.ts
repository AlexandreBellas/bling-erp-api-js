export interface IUpdateParams {
  /**
   * ID do serviço
   */
  idLogisticaServico: number
}

export interface IUpdateBody {
  descricao: string
  codigo: string
  aliases: string[]
  ativo?: boolean
  freteItem: number
  estimativaEntrega: number
  idCodigoServico?: string
  transportador?: { id: number }
}

export interface IUpdateResponse {
  data: { id: number }
}
