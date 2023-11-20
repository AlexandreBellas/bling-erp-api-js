export interface IGetParams {
  pagina?: number
  limite?: number
}

export interface IGetSingleResponse {
  id: number
  descricao: string
  categoriaPai: {
    id: number
  }
}
