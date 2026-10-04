import { IOcorrencia } from './create.interface'

export interface IUpdateParams {
  idContaPagar: number
}

export interface IUpdateBody {
  vencimento: string
  valor: number
  contato: { id: number }
  formaPagamento?: { id: number }
  saldo?: number
  dataEmissao?: string
  numeroDocumento?: string
  competencia?: string
  historico?: string
  portador?: { id: number }
  categoria?: { id: number }
  ocorrencia?: IOcorrencia
}

export interface IUpdateResponse {
  id: number
}
