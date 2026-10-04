import { ISituacao, ISituacaoFiltro } from '../types/situacao.type'

export interface IGetByLogisticParams {
  /**
   * ID da logística
   */
  idLogistica: number
  /**
   * Filtro obrigatório de situação da remessa.
   */
  situacao: ISituacaoFiltro
}

export interface IGetByLogisticResponse {
  data: {
    id: number
    numeroPlp: string
    situacao: ISituacao
    descricao: string
    dataCriacao: string
    objetos: number[]
  }[]
}
