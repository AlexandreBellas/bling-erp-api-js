export interface IFindParams {
  /**
   * ID da transição
   */
  idTransicao: number
}

export interface IFindResponse {
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
  }
}
