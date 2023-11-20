import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  dataEmissaoInicial?: Date
  dataEmissaoFinal?: Date
  dataVencimentoInicial?: Date
  dataVencimentoFinal?: Date
  dataPagamentoInicial?: Date
  dataPagamentoFinal?: Date
  situacao?: ISituacao
  idContato?: number
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
