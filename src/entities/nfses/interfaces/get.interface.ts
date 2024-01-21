import { ISituacaoNfse } from '../types/situacao.type'

export interface IGetParams {
  /**
   * N° da página da listagem
   */
  pagina?: number
  /**
   * Quantidade de registros que devem ser exibidos por página
   */
  limite?: number
  /**
   *
   */
  situacao?: ISituacaoNfse
  /**
   * Data incial do período de emissão
   */
  dataEmissaoInicial?: string | Date
  /**
   * Data final do período de emissão
   */
  dataEmissaoFinal?: string | Date
}

export interface IGetResponse {
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
  }[]
}
