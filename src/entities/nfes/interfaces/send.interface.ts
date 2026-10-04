export interface ISendParams {
  /**
   * ID da nota fiscal
   */
  idNotaFiscal: number
  /**
   * Envia a nota por e-mail após a autorização.
   */
  enviarEmail?: boolean
}

export interface ISendResponse {
  data: {
    xml?: string
  }
}
