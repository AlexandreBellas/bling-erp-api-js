import { ISituacaoFiltro } from '../types/situacao.type'
import { ITipo, ITipoFiltro } from '../types/tipo.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  tipo?: ITipoFiltro
  situacao?: ISituacaoFiltro
}

export interface IGetResponse {
  data: {
    id: number
    idCategoriaPai: number
    descricao: string
    tipo: ITipo
  }[]
}
