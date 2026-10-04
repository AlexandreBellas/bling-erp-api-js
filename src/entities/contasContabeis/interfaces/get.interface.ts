import { IOrdenacao } from '../types/ordenacao.type'
import { ISituacao } from '../types/situacao.type'
import { ITipo } from '../types/tipo.type'

export interface IGetParams {
  pagina?: number
  limite?: number
  ocultarInvisiveis?: boolean
  /**
   * @deprecated Não consta na documentação oficial do endpoint.
   */
  ocultarContasIntegracaoPagamento?: boolean
  ocultarTipoContaBancaria?: boolean
  situacoes?: ISituacao[]
  /**
   * Alias da integração
   */
  aliasIntegracao?: string
  /**
   * Ordenação da obtenção. `descricao` ou `-descricao`.
   */
  ordenacao?: IOrdenacao
}

export interface IGetResponse {
  data: {
    id: number
    descricao: string
    tipo?: ITipo
    aliasIntegracao?: string
  }[]
}
