import { IDefaultErrorResponse } from 'src/entities/@shared/interfaces/error.interface'

export interface IDeleteManyParams {
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas?: ({ id: number } & IDefaultErrorResponse)[]
  }
}
