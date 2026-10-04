import { IStatus12 } from '../types/status12.type'

export interface ILotesProdutoDTO {
  id: number
}

export interface ILotesDepositoDTO {
  id: number
}

export interface ILotesDTO {
  idLote: number
  codigoLote?: string
  dataFabricacao: string
  dataValidade: string
  diasPermitidoVenda?: number
  codigoAgregacao?: string
  produto: ILotesProdutoDTO
  deposito: ILotesDepositoDTO
  /**
   * `1` Ativo `2` Inativo
   */
  status?: IStatus12
}

export interface IFindParams {
  /**
   * ID do lote
   */
  idLote: number
}

export interface IFindResponse {
  data?: ILotesDTO
}
