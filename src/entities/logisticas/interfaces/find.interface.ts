import { ISituacao } from '../types/situacao.type'
import { ITipoIntegracao } from '../types/tipo-integracao.type'

export interface IFindParams {
  /**
   * ID da logística
   */
  idLogistica: number
  /**
   * Inclui serviços inativos na resposta quando verdadeiro.
   */
  listarServicosInativos?: boolean
}

export interface IFindResponse {
  data: {
    id: number
    descricao: string
    tipoIntegracao: ITipoIntegracao
    integracaoNativa: boolean
    situacao: ISituacao
    integracao: { id: number }
    servicos: {
      id: number
      descricao: string
      freteItem: number
      estimativaEntrega: number
      codigo: string
      logistica: { id: number }
      transportador: { id: number }
      aliases: string[]
      ativo?: boolean
    }[]
  }
}
