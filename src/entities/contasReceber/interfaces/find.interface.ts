import { ISituacao } from '../types/situacao.type'

interface ContasReceberOcorrenciaUnicaDTO {
  /**
   * `1`: Única
   */
  tipo: 1
}

interface ContasReceberOcorrenciaParceladaDTO {
  /**
   * `2`: Parcelada
   */
  tipo: 2
  considerarDiasUteis: boolean
  diaVencimento: number
  numeroParcelas: number
}

interface ContasReceberOcorrenciaDTO {
  /**
   * `3`: Mensal
   * `4`: Bimestral
   * `5`: Trimestral
   * `6`: Semestral
   * `7`: Anual
   * `8`: Quinzenal
   */
  tipo: 3 | 4 | 5 | 6 | 7 | 8
  considerarDiasUteis: boolean
  diaVencimento: number
  dataLimite: string
}

interface ContasReceberOcorrenciaSemanalDTO {
  /**
   * `9`: Semanal
   */
  tipo: 9
  considerarDiasUteis: boolean
  diaSemanaVencimento: number
  dataLimite: string
}

export interface IFindParams {
  idContaReceber: number
}

export interface IFindResponse {
  data: {
    id: number
    situacao: ISituacao
    vencimento: string
    valor: number
    contato: { id: number }
    formaPagamento: { id: number }
    saldo: number
    dataEmissao: string
    vencimentoOriginal: string
    numeroDocumento: string
    competencia: string
    historico: string
    numeroBanco: string
    portador: { id: number }
    categoria: { id: number }
    vendedor: { id: number }
    borderos: number[]
    ocorrencia:
      | ContasReceberOcorrenciaUnicaDTO
      | ContasReceberOcorrenciaParceladaDTO
      | ContasReceberOcorrenciaDTO
      | ContasReceberOcorrenciaSemanalDTO
  }
}
