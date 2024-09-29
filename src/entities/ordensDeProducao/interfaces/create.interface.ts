export interface ICreateBody {
  dataPrevisaoInicio?: string
  dataPrevisaoFinal?: string
  dataInicio?: string
  dataFim?: string
  numero: number
  responsavel?: string
  deposito: {
    idDestino?: number
    idOrigem?: number
  }
  situacao: {
    id: number
  }
  itens?: {
    produto?: {
      id: number
    }
    quantidade?: number
  }[]

  observacoes?: string
}

export interface ICreateResponse {
  data?: {
    id: number
  }
}
