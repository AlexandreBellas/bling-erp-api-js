import { ISituacao } from '../types/situacao.type'

export interface IUpdateParams {
  /**
   * ID da remessa de postagem
   */
  idRemessa: number
}

export interface IUpdateBody {
  numeroPlp: string
  situacao: ISituacao
  descricao: string
}

export interface IUpdateResponse {
  data: { id: number }
}
