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
   * Parâmetro para filtrar os registros através do tipo da logística.
   */
  tipoIntegracao?: ITipoIntegracao
}

export interface IGetResponse {
  data: {
    id?: number
    descricao: string
    codigo: string
    aliases: string[]
    ativo?: boolean
    freteItem: number
    estimativaEntrega: number
    idCodigoServico: string
    logistica: { id: number }
    transportador: { id: number }
  }[]
}
