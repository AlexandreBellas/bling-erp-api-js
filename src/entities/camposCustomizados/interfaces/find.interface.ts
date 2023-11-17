import ISituacao from '../../@shared/types/situacao.type'

export interface IFindParams {
  idCampoCustomizado: number
}

export interface IFindResponse {
  id: number
  nome: string
  situacao: ISituacao
  placeholder: string
  obrigatorio: boolean
  opcoes: {
    id: number
    nome: string
  }[]
  tamanho: {
    minimo: number
    maximo: number
  }
  agrupadores: {
    id: number
  }[]
  modulo: {
    id: number
  }
  tipoCampo: {
    id: number
  }
}
