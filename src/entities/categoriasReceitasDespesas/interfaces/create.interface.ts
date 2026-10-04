import { IGrupoDRE } from '../types/grupo-dre.type'
import { ITipo } from '../types/tipo.type'

export interface ICreateBody {
  descricao: string
  tipo: ITipo
  /**
   * Id da categoria pai. Se for a categoria raíz será 0.
   */
  idCategoriaPai?: number
  grupoDRE?: IGrupoDRE
}

export interface ICreateResponse {
  data: {
    id?: number
    idCategoriaPai?: number
    descricao: string
    tipo: ITipo
  }
}
