import { ISituacao } from '../types/situacao.type'
import { ITipoIntegracao } from '../types/tipo-integracao.type'

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
   * Parâmetro para filtrar os registros através do tipo da logística
   */
  tipoIntegracao?: ITipoIntegracao
  /**
   * Parâmetro para filtrar os registros através da situação
   */
  situacao?: ISituacao
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    tipoIntegracao: ITipoIntegracao
    integracaoNativa: boolean
    situacao: ISituacao
    integracao: { id: number }
    servicos: { id: number }[]
  }[]
}
