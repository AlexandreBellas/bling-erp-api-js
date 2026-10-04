import { ITipo } from '../types/tipo.type'

export interface IFindParams {
  idContaContabil: number
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    tipo?: ITipo
    aliasIntegracao?: string
  }
}
