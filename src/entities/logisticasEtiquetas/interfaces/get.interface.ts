import { IFormato } from '../types/formato.type'

export interface IGetParams {
  formato: IFormato
  idsVendas: number[]
}

export interface IGetResponse {
  data: {
    id: number
    link: string
    observacao: string
  }[]
}
