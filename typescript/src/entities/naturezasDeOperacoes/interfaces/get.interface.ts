import ISituacao from 'src/entities/@shared/types/situacao.type'
import { IPadrao } from '../types/padrao.type'

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
  situacao?: ISituacao
  /**
   * Descrição da natureza de operação
   */
  descricao?: string
}

export interface IGetResponse {
  data: {
    id?: number
    situacao?: ISituacao
    padrao?: IPadrao
    descricao?: string
  }[]
}
