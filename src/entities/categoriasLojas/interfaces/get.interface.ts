export interface IGetParams {
  pagina?: number
  limite?: number
  idLoja?: number
  idCategoriaProduto?: number
  idCategoriaProdutoPai?: number
}

export interface IGetResponse {
  data: {
    id: number
    loja: { id: number }
    descricao: string
    codigo: string
    categoriaProduto: { id: number }
  }[]
}
