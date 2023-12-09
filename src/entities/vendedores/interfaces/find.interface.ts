import { ISituacao } from '../types/situacao.type'

export interface IFindParams {
  /**
   * ID do vendedor
   */
  idVendedor: number
}

export interface IFindResponse {
  data: {
    id?: number
    descontoLimite?: number
    loja?: { id: number }
    contato: {
      id: number
      nome: string
      situacao: ISituacao
    }
    comissoes: {
      descontoMaximo: number
      aliquota: number
    }[]
  }
}
