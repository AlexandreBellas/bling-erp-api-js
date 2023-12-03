import { ISituacaoNfse } from '../types/situacao.type'

export interface IFindParams {
  /**
   * ID da nota de serviço
   */
  idNotaServico: number
}

export interface IFindResponse {
  data: {
    id: number
    numero?: string
    numeroRPS: string
    serie: string
    situacao?: ISituacaoNfse
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
