import { IDefaultErrorResponse } from '../../@shared/interfaces/error.interface'
import { ISituacao } from '../types/situacao.type'

export interface IChangeSituationManyBody {
  idsContatos?: number[]
  situacao?: ISituacao
}

export interface IChangeSituationManyResponse {
  data: {
    alertas: IDefaultErrorResponse[]
  }
}
