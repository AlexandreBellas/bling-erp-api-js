import { ISituacao } from '../types/situacao.type'

export interface ICreateBody {
  numeroPlp: string
  situacao: ISituacao
  descricao: string
  logistica?: { id: number }
  objetos: string[]
}

export interface ICreateResponse {
  data: { id: number }
}
