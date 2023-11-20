export interface ICreateBody {
  descricao: string
  categoriaPai: {
    id: number
  }
}

export interface ICreateResponse {
  id: number
}
