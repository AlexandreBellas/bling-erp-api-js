import { IDefaultErrorResponse } from 'src/entities/@shared/interfaces/error.interface'

export interface IDeleteManyParams {
  /**
   * IDs dos grupos de produtos
   */
  idsGruposProdutos: number[]
}

export interface IDeleteManyResponse {
  data: {
    alertas?: IDefaultErrorResponse[]
  }
}
