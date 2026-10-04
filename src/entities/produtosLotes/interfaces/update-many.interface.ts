import { IType } from '../types/type.type'

export interface ILotesProdutoDTOWrite {
  id: number
}

export interface ILotesDepositoDTOWrite {
  id: number
}

export interface ILotesDTOWrite {
  idLote: number
  codigoLote?: string
  dataFabricacao: string
  dataValidade: string
  diasPermitidoVenda?: number
  codigoAgregacao?: string
  produto: ILotesProdutoDTOWrite
  deposito: ILotesDepositoDTOWrite
}

export interface ILotResponseDTO {
  id?: number
  codigoLote?: string
  idProduto?: number
}

export interface IErrorFieldCollection {
  index: number
  code: number
  msg: string
  element?: string
  /**
   * Referência ao objeto com erro.
   */
  namespace?: string
}

export interface IErrorField {
  code: number
  msg: string
  element?: string
  /**
   * Referência ao objeto com erro.
   */
  namespace?: string
  collection?: IErrorFieldCollection[]
}

export interface IError {
  type: IType
  message: string
  description: string
  fields?: IErrorField[]
}

export interface IErrorResponse {
  error?: IError
}

export interface ISaveResponseLotsDTO {
  saved?: ILotResponseDTO[]
  errors?: IErrorResponse[]
}

export type IUpdateManyBody = ILotesDTOWrite[]

export interface IUpdateManyResponse {
  data?: ISaveResponseLotsDTO
}
