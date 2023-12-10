export interface IChangeSituationParams {
  /**
   * ID do produto da homologação
   */
  idProdutoHomologacao: number
}

export interface IChangeSituationHeaders {
  hash: string
}

export interface IChangeSituationBody {
  situacao: string
}

export interface IChangeSituationResponse {
  headers: {
    'x-bling-homologacao': string
  }
}
