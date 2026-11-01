import { ISituacao } from '../types/situacao.type'

export interface ISendParams {
  /**
   * ID da nota de serviço
   */
  idNotaServico: number
}

export interface ISendResponse {
  data: {
    id: number
    numero?: string
    numeroRPS: string
    serie: string
    situacao?: ISituacao
    dataEmissao?: string
    valor?: number
    contato: {
      id: number
      nome: string
      numeroDocumento: string
      email: string
    }
    link?: string
    codigoVerificacao?: string
  }
}
