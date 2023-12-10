import { IDefaultErrorResponse } from 'src/entities/@shared/interfaces/error.interface'
import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationManyBody {
  idsProdutos?: number[]
  situacao?: ISituacao | 'E'
}

export interface IChangeSituationManyResponse {
  data: {
    alertas?: ({ id: number } & IDefaultErrorResponse)[]
  }
}
