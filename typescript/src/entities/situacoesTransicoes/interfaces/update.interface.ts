export interface IUpdateParams {
  /**
   * ID da transição
   */
  idTransicao: number
}

export interface IUpdateBody {
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

export interface IUpdateResponse {
  data: { id: number }
}
