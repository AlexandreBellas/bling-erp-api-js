import { IDefaultErrorResponse } from '../../@shared/interfaces/error.interface'

export interface IDeleteManyParams {
  idsContatos: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas: IDefaultErrorResponse[]
  }
}
