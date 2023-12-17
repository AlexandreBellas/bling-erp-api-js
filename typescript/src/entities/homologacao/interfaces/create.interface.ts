export interface ICreateHeaders {
  hash: string
}

export interface ICreateBody {
  nome: string
  preco: number
  codigo: string
}

export interface ICreateResponse {
  headers: {
    'x-bling-homologacao': string
  }
  data: {
    id: number
    nome: string
    preco: number
    codigo: string
  }
}
