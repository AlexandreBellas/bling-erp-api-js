import { ISituacao } from '../types/situacao.type'

export interface IGetBankSlipsParams {
  idOrigem: number
  situacoes?: ISituacao[]
}

export interface IGetBankSlipsResponse {
  venda: {
    numero: string
  },
  notaFiscal: {
    numero: string
  },
  valorTotal: number
  contas: {
    id: number
    numeroExterno: string
    vencimento: string
    valor: number
    situacao: ISituacao
  }[]
}
