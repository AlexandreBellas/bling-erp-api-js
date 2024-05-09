import { ISituacao } from '../types/situacao.type'

export interface IFindParams {
  idCanalVenda: number
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    tipo: string
    situacao: ISituacao
    filiais: {
      cnpj: string
      unidadeNegocio: string
      deposito: { id: number }
      padrao: boolean
    }[]
  }
}
