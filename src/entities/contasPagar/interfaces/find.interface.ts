import { ISituacao } from '../types/situacao.type'

interface ContasPagarOcorrenciaUnicaDTO {
  /**
   * `1`: Única
   */
  tipo: 1
}

interface ContasPagarOcorrenciaParceladaDTO {
  /**
   * `2`: Parcelada
   */
  tipo: 2
  considerarDiasUteis: boolean
  diaVencimento: number
  numeroParcelas: number
}

interface ContasPagarOcorrenciaDTO {
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

interface ContasPagarOcorrenciaSemanalDTO {
  /**
   * `9`: Semanal
   */
  tipo: 9
  considerarDiasUteis: boolean
  diaSemanaVencimento: number
  dataLimite: string
}

export interface IFindParams {
  idContaPagar: number
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
    borderos: number[]
    ocorrencia:
    | ContasPagarOcorrenciaUnicaDTO
    | ContasPagarOcorrenciaParceladaDTO
    | ContasPagarOcorrenciaDTO
    | ContasPagarOcorrenciaSemanalDTO
  }
}
