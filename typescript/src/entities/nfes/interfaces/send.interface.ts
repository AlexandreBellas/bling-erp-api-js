export interface ISendParams {
  /**
   * ID da nota fiscal
   */
  idNotaFiscal: number
}

export interface ISendResponse {
  data: {
    xml?: string
  }
}
