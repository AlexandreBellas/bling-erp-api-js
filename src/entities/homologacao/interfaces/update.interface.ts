export interface IUpdateParams {
  /**
   * ID do produto da homologação
   */
  idProdutoHomologacao: number
}

export interface IUpdateHeaders {
  hash: string
}

export interface IUpdateBody {
  nome: string
  preco: number
  codigo: string
}

export interface IUpdateResponse {
  headers: {
    'x-bling-homologacao': string
  }
}
