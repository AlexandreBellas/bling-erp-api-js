export interface IFindParams {
  idCategoriaLoja: number
}

export interface IFindResponse {
  data: {
    id: number
    loja: { id: number }
    descricao: string
    codigo: string
    categoriaProduto: { id: number }
  }
}
