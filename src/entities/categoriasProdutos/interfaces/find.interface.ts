export interface IFindParams {
  idCategoriaProduto: number
}

export interface IFindResponse {
  id: number
  descricao: string
  categoriaPai: {
    id: number
  }
}
