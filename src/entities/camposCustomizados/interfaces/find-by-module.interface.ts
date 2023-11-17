import ISituacao from '../../@shared/types/situacao.type'

export interface IFindByModuleParams {
  idModulo: number
  pagina?: number
  limite?: number
}

export interface IFindByModuleSingleResponse {
  id: number
  nome: string
  situacao: ISituacao
}
