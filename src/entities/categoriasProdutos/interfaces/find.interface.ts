export interface IFindParams {
  idCategoriaProduto: number
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    categoriaPai: {
      id: number
    }
  }
}
