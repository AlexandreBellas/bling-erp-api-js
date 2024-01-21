import { IOperacao } from '../types/operacao.type'

export interface ICreateBody {
  produto: { id: number }
  deposito: { id: number }
  operacao: IOperacao
  preco?: number
  custo?: number
  quantidade: number
  observacoes?: string
}

export interface ICreateResponse {
  data: { id: number }
}
