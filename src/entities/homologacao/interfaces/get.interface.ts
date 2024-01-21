export interface IGetResponse {
  headers: {
    'x-bling-homologacao': string
  }
  data: {
    nome: string
    preco: number
    codigo: string
  }
}
