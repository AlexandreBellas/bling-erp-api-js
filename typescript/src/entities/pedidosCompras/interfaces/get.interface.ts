import { ISituacao } from '../types/situacao.type'

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
   * ID do contato do tipo fornecedor
   */
  idFornecedor?: number
  /**
   * Valor da situação
   */
  valorSituacao?: number
  /**
   * ID da situação
   */
  idSituacao?: ISituacao
  /**
   * Data inicial do período da compra
   */
  dataInicial?: Date | string
  /**
   * Data final do período da compra
   */
  dataFinal?: Date | string
}

export interface IGetResponse {
  data: {
    id?: number
    numero?: number
    data?: string
    dataPrevista?: string
    totalProdutos?: number
    total?: number
    fornecedor: { id: number }
    situacao?: { valor: ISituacao }
  }[]
}
