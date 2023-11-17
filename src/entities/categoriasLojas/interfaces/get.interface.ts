export interface IGetParams {
  pagina?: number
  limite?: number
  idLoja?: number
  idCategoriaProduto?: number
  idCategoriaProdutoPai?: number
}

export interface IGetSingleResponse {
  id: number
  loja: { id: number }
  descricao: string
  codigo: string
  categoriaProduto: { id: number }
}
