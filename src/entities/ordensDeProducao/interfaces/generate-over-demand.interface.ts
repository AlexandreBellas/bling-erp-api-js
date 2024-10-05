export interface IGenerateOverDemandResponse {
  data?: {
    id?: number
    itens?: {
      produto?: {
        id: number
        nome?: string
        codigo?: string
      }
      quantidade?: number
    }[]

    deposito?: {
      idDestino?: number
      idOrigem?: number
    }
  }[]
}
