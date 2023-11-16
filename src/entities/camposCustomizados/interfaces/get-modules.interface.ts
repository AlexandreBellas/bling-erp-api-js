export interface IGetModuleSingleResponse {
  id: number
  nome: string
  modulo: string
  agrupador: string
  permissoes: {
    nome: string
    modulo: string
    autorizado: boolean
  }[]
}
