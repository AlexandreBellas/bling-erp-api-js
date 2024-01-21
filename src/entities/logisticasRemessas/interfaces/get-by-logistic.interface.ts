import { ISituacao } from '../types/situacao.type'

export interface IGetByLogisticParams {
  /**
   * ID da logística
   */
  idLogistica: number
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
