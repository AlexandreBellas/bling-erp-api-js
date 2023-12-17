import { IOperacao } from '../types/operacao.type'

export interface IUpdateParams {
  /**
   * ID do estoque
   */
  idEstoque: number
}

export interface IUpdateBody {
  operacao: IOperacao
  preco?: number
  custo?: number
  quantidade: number
  observacoes?: string
  data?: string
}
