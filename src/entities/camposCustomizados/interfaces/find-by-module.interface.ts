import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface IFindByModuleParams {
  idModulo: number
  pagina?: number
  limite?: number
}

export interface IFindByModuleResponse {
  data: {
    id: number
    nome: string
    situacao: ISituacao
  }[]
}
