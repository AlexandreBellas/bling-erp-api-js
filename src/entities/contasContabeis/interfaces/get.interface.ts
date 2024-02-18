import { ISituacao } from '../types/situacao.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  ocultarInvisiveis?: boolean
  ocultarContasIntegracaoPagamento?: boolean
  ocultarTipoContaBancaria?: boolean
  situacoes?: ISituacao[]
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
  }[]
}
