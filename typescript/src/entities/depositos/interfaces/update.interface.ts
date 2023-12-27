import { IDefaultErrorFieldsResponse } from 'src/entities/@shared/interfaces/error.interface'
import ISituacao from 'src/entities/@shared/types/situacao.type'

export interface IUpdateParams {
  /**
   * ID do depósito
   */
  idDeposito: number
}

export interface IUpdateBody {
  descricao: string
  situacao: ISituacao
  padrao: boolean
  desconsiderarSaldo: boolean
}

export interface IUpdateResponse {
  id: number
  alertas?: IDefaultErrorFieldsResponse[]
}
