export interface ISendParams {
  /**
   * ID da nota fiscal de consumidor
   */
  idNotaFiscalConsumidor: number
}

export interface ISendResponse {
  data: { xml?: string }
}
