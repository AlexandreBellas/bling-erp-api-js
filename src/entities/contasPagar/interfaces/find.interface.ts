import { ISituacao } from '../types/situacao.type'

export interface IFindParams {
  idContaPagar: number
}

export interface IFindResponse {
  data: {
    id: number
    situacao: ISituacao
    vencimento: string
    valor: number
    contato: { id: number }
    formaPagamento: { id: number }
    saldo: number
    dataEmissao: string
    vencimentoOriginal: string
    numeroDocumento: string
    competencia: string
    historico: string
    numeroBanco: string
    portador: { id: number }
    categoria: { id: number }
    borderos: number[]
  }
}
