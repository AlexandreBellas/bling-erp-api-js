export interface IFindByModuleParams {
  id: number
  pagina?: number
  limite?: number
}

export interface IFindByModuleSingleResponse {
  id: number
  nome: string
  /**
   * `0`: inativo
   * `1`: ativo
   */
  situacao: 0 | 1
}
