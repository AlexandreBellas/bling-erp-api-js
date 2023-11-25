import ISituacao from '../../@shared/types/situacao.type'

export interface ICreateBody {
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
  agrupadores?: { id: number }[]
  modulo: { id: number }
  tipoCampo: { id: number }
}

export interface ICreateResponse {
  data: {
    id: number
    idsVinculosAgrupadores: number[]
    idsOpcoes: number[]
  }
}
