import { ISituacao } from '../types/situacao.type'

export interface ICreateBody {
  descricao: string
  situacao: ISituacao
  servicos?: {
    descricao: string
    freteItem?: number
    estimativaEntrega?: number
    codigo?: string
    transportador?: { id: number }
    aliases?: string[]
  }[]
}

export interface ICreateResponse {
  data: { id: number }
}
