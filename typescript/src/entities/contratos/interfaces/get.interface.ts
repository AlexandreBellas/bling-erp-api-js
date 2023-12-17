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
   * Data inicial de criação
   */
  dataCriacaoInicio?: Date | string
  /**
   * Data final de criação
   */
  dataCriacaoFinal?: Date | string
  /**
   * Data base inicial para geração de cobranças
   */
  dataBaseInicio?: Date | string
  /**
   * Data base final para geração de cobranças
   */
  dataBaseFinal?: Date | string
  /**
   *
   */
  situacao?: ISituacao
  /**
   * ID do contato
   */
  idContato?: number
  /**
   * ID do contato de cobrança
   */
  idContatoCobranca?: number
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    data: string
    numero: string
    valor: number
    situacao: ISituacao
    contato: { id: number }
  }[]
}
