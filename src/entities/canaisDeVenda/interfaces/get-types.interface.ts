import { IAgrupador } from '../types/agrupador.type'

export interface IGetTypesParams {
  agrupador?: IAgrupador
}

export interface IGetTypesResponse {
  data: {
    nome: string
    tipo: string
    agrupador: IAgrupador
  }[]
}
