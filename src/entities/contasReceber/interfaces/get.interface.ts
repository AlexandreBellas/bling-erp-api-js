import { ICodigoFiscal } from '../types/codigo-fiscal.type'
import { IOrigemSituacao } from '../types/origem-situacao.type'
import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  situacoes?: ISituacao[]
  /**
   * - `E`: filtrar por data de emissão
   * - `V`: filtrar por data de vencimento
   * - `R`: Data de recebimento
   */
  tipoFiltroData?: 'E' | 'V' | 'R'
  dataInicial?: Date | string
  dataFinal?: Date | string
  idsCategorias?: number[]
  idPortador?: number
  idContato?: number
  idVendedor?: number
  idFormaPagamento?: number
  boletoGerado?: number
}

export interface IGetResponse {
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
    formaPagamento?: { id: number; codigoFiscal?: ICodigoFiscal }
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
  }[]
}
