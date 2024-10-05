export interface IFindParams {
  /**
   * ID da ordem de produção
   */
  idOrdemProducao: number
}

export interface IFindResponse {
  id: number
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
    valor: number
    nome: string
  }
  vendas?: {
    numero?: number
    contato?: {
      id?: number
      nome?: string
    }
  }[]
  itens?: {
    produto?: {
      id: number
      nome?: string
      codigo?: string
    }
    quantidade?: number
  }[]
  observacoes?: string
}
