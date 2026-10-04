export interface IGetQuantityParams {
  /**
   * Apenas ano ou ano e mês em que a empresa foi notificada (ex.: `2023` ou
   * `2023-01`). Se não informado, será utilizado o ano atual.
   */
  periodo?: string
}

export interface IGetQuantityResponse {
  data: {
    /**
     * Quantidade de notificações.
     */
    quantidade?: number
  }
}
