import { IGrupoDre } from '../types/grupo-dre.type'
import { ITipo } from '../types/tipo.type'

export interface IUpdateParams {
  /**
   * ID da categoria de receita e despesa
   */
  idCategoria: number
}

export interface IUpdateBody {
  descricao: string
  tipo: ITipo
  /**
   * Id da categoria pai. Se for a categoria raíz será 0.
   */
  idCategoriaPai?: number
  grupoDRE?: IGrupoDre
}

export interface IUpdateResponse {
  data: {
    id?: number
    idCategoriaPai?: number
    descricao: string
    tipo: ITipo
  }
}
