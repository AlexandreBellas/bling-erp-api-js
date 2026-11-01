export interface IGetModulesResponse {
  data: {
    id: number
    nome: string
    modulo: string
    agrupador: string
    permissoes: {
      nome: string
      modulo: string
      autorizado: boolean
    }[]
  }[]
}
