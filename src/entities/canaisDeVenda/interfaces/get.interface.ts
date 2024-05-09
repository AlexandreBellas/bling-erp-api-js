import { IAgrupador } from '../types/agrupador.type'
import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  tipos?: string[]
  situacao?: ISituacao
  agrupador?: IAgrupador
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    tipo: string
    situacao: ISituacao
  }[]
}
