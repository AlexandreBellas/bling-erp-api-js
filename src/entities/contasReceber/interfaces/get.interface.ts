import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  situacoes?: ISituacao[]
  /**
   * `E`: filtrar por data de emissão
   * `V`: filtrar por data de vencimento
   */
  tipoFiltroData?: 'E' | 'V'
  dataInicial?: Date
  dataFinal?: Date
  idsCategorias?: number[]
  idPortador?: number
  idVendedor?: number
  idFormaPagamento?: number
}

export interface IGetResponse {
  data: {
    id: number
    situacao: ISituacao
    vencimento: string
    valor: number
    contato: { id: number }
    formaPagamento: { id: number }
  }[]
}
