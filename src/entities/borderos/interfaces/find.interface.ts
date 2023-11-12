/**
 * Parâmetros para encontrar um borderô.
 */
export interface IFindParams {
  id: number
}

/**
 * Interface de resposta bem sucedida ao encontrar um borderô.
 */
export interface IFindSuccessResponse {
  data: {
    id: number
    data: string
    historico: string
    portador: {
      id: number
    }
    categoria: {
      id: number
    }
    pagamentos: [
      {
        contato: {
          id: number
        }
        numeroDocumento: string
        valorPago: number
        juros: number
        desconto: number
        acrescimo: number
        tarifa: number
      }
    ]
  }
}
