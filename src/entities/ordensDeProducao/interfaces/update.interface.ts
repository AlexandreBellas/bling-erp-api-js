export interface IUpdateParams {
  /**
   * ID da ordem de produção
   */
  idOrdemProducao: number
}

export interface IUpdateBody {
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
