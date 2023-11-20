export interface IDownloadParams {
  idContaPagar: number
}

export interface IDownloadBody {
  data: string
  usarDataVencimento: boolean
  portador: { id: number }
  categoria: { id: number }
  historico: string
  juros: number
  desconto: number
  acrescimo: number
  valorRecebido: number
}

export interface IDownloadResponse {
  bordero: { id: number }
}
