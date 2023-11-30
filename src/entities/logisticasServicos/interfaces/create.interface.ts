export interface ICreateBody {
  logistica: { id: number }
  servicos: {
    descricao: string
    codigo: string
    aliases: string[]
    ativo?: boolean
    freteItem: number
    estimativaEntrega: number
    idCodigoServico?: string
    transportador: { id: number }
  }[]
}

export interface ICreateResponse {
  data: { id: number }[]
}
