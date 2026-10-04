export interface ICreateBody {
  id?: number
  nome: string
  grupoProdutoPai: {
    id: number
  }
}

export interface ICreateResponse {
  data: {
    id: number
  }
}
