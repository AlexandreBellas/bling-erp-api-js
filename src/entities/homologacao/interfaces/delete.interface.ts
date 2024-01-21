export interface IDeleteParams {
  /**
   * ID do produto da homologação
   */
  idProdutoHomologacao: number
}

export interface IDeleteHeaders {
  hash: string
}

export interface IDeleteResponse {
  headers: {
    'x-bling-homologacao': string
  }
}
