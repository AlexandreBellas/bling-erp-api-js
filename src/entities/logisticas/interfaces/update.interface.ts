import { ISituacao } from '../types/situacao.type'

export interface IUpdateParams {
  /**
   * ID da logística
   */
  idLogistica: number
}

export interface IUpdateBody {
  descricao: string
  situacao: ISituacao
}
