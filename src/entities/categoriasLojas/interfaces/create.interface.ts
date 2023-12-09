export interface ICreateBody {
  loja: { id: number }
  descricao: string
  codigo: string
  categoriaProduto: { id: number }
}

export interface ICreateResponse {
  data: {
    id: number
  }
}
