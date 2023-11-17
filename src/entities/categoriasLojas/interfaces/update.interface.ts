export interface IUpdateParams {
  idCategoriaLoja: number
}

export interface IUpdateBody {
  loja: { id: number }
  descricao: string
  codigo: string
  categoriaProduto: { id: number }
}
