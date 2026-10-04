import IErrorType from '../types/error-type.type'

interface IDefaultErrorFieldsCollectionItemResponse {
  index: number
  code: number
  msg: string
  element: string
  namespace: string
}

export interface IDefaultErrorFieldsResponse {
  code: number
  msg: string
  element: string
  namespace: string
  collection: IDefaultErrorFieldsCollectionItemResponse[]
}

/**
 * Interface padrão para erros da API.
 */
export interface IDefaultErrorResponse {
  error: {
    type: IErrorType
    message: string
    description: string
    fields?: IDefaultErrorFieldsResponse[]
  }
}
