import { IDefaultErrorResponse } from '../../@shared/interfaces/error.interface'

export interface IDeleteManyParams {
  /**
   * IDs das categorias a serem removidas
   */
  idsCategorias: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas?: IDefaultErrorResponse[]
  }
}
