import { ISituacao } from '../types/situacao.type'
import { ITipo } from '../types/tipo.type'

export interface IFindParams {
  idCategoria: number
}

export interface IFindResponse {
  data: {
    id: number
    idCategoriaPai: number
    descricao: string
    tipo: ITipo
    situacao: ISituacao
  }
}
