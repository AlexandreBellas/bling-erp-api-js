export interface IGetParams {
  pagina?: number
  limite?: number
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    categoriaPai: {
      id: number
    }
  }[]
}
