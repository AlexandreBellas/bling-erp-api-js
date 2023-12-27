export interface ICreateBody {
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
}

export interface ICreateResponse {
  data: { id: number }
}
