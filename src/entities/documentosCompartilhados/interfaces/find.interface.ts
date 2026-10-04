export interface IFindParams {
  /**
   * Token HMAC assinado contendo os dados do documento e prazo de validade.
   */
  token: string
}

export interface IFindResponse {
  headers: {
    location: string
  }
}
