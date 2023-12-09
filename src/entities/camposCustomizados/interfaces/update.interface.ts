import ISituacao from '../../@shared/types/situacao.type'

export interface IUpdateParams {
  idCampoCustomizado: number
}

export interface IUpdateBody {
  nome: string
  situacao?: ISituacao
  placeholder?: string
  obrigatorio?: boolean
  opcoes?: {
    id: number
    nome: string
  }[]
  tamanho?: {
    minimo?: number
    maximo?: number
  }
  agrupadores: { id: number }[]
}

export interface IUpdateResponse {
  data: {
    id: number
    idsVinculosAgrupadores: number[]
    idsOpcoes: number[]
  }
}
