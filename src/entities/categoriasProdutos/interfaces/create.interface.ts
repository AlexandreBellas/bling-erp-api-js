export interface ICreateBody {
  descricao: string
  categoriaPai: {
    id: number
  }
}

export interface ICreateResponse {
  data: {
    id: number
  }
}
