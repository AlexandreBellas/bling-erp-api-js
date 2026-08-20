import { ICodigoFiscal } from '../types/codigo-fiscal.type'
import { IOrigemSituacao } from '../types/origem-situacao.type'
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
    idTransacao?: string
    linkQRCodePix?: string
    linkBoleto?: string
    dataEmissao?: string
    contato: {
      id: number
      nome?: string
      numeroDocumento?: string
      tipo?: string
    }
    formaPagamento: { id: number; codigoFiscal?: ICodigoFiscal }
    contaContabil?: { id?: number; descricao?: string }
    origem?: {
      id?: number
      tipoOrigem?: string
      numero?: string
      dataEmissao?: string
      valor?: number
      situacao?: IOrigemSituacao
      url?: string
    }
    saldo: number
    vencimentoOriginal: string
    numeroDocumento?: string
    competencia?: string
    historico?: string
    numeroBanco: string
    portador?: { id: number }
    categoria?: { id: number }
    vendedor?: { id: number }
    borderos: number[]
    ocorrencia:
      | ContasReceberOcorrenciaUnicaDTO
      | ContasReceberOcorrenciaParceladaDTO
      | ContasReceberOcorrenciaDTO
      | ContasReceberOcorrenciaSemanalDTO
  }
}
