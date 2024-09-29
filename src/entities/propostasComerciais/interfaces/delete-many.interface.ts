import { IDefaultErrorResponse } from 'src/entities/@shared/interfaces/error.interface'

export interface IDeleteManyParams {
  /**
   * IDs das propostas comerciais
   */
  idsPropostasComerciais: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas?: IDefaultErrorResponse[]
  }
}
