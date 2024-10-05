export interface ICreateBody {
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
