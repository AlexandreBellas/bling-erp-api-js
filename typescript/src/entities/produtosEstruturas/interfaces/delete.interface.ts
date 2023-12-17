import { IDefaultErrorFieldsResponse } from '../../@shared/interfaces/error.interface'

export interface IDeleteParams {
  /**
   * IDs dos produtos
   */
  idsProdutos: number[]
}

export interface IDeleteResponse {
  data: {
    alertas?: IDefaultErrorFieldsResponse[]
  }
}
