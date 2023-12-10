import { ISituacao } from '../types/situacao.type'
import { ITipo } from '../types/tipo.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  tipo?: ITipo
  situacao?: ISituacao
}

export interface IGetResponse {
  data: {
    id: number
    idCategoriaPai: number
    descricao: string
    tipo: ITipo
  }[]
}
