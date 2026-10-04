import { ISituacao, ISituacaoFiltro } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  dataEmissaoInicial?: Date | string
  dataEmissaoFinal?: Date | string
  dataVencimentoInicial?: Date | string
  dataVencimentoFinal?: Date | string
  dataPagamentoInicial?: Date | string
  dataPagamentoFinal?: Date | string
  situacao?: ISituacaoFiltro
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
