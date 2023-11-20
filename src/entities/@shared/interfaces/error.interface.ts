interface IDefaultErrorFieldsCollectionItemResponse {
  index: number
  code: number
  msg: string
  element: string
  namespace: string
}

interface IDefaultErrorFieldsResponse {
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
    type: string
    message: string
    description: string
    fields?: IDefaultErrorFieldsResponse[]
  }
}
