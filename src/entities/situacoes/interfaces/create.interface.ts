export interface ICreateBody {
  idModuloSistema?: number
  nome?: string
  idHerdado?: number
  cor?: string
}

export interface ICreateResponse {
  data: { id: number }
}
