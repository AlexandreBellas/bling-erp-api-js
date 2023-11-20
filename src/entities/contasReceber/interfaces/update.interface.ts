export interface IUpdateParams {
  idContaReceber: number
}

export interface IUpdateBody {
  vencimento: string
  valor: number
  contato: { id: number }
  formaPagamento: { id: number }
  dataEmissao: string
  numeroDocumento: string
  competencia: string
  historico: string
  portador: { id: number }
  categoria: { id: number }
  vendedor: { id: number }
}

export interface IUpdateResponse {
  data: {
    id: number
  }
}
