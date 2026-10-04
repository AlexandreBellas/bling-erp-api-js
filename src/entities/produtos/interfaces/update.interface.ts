import { IReplaceBody, IReplaceResponse } from './replace.interface'

export interface IUpdateParams {
  /**
   * ID do produto
   */
  idProduto: number
}

export interface IUpdateBody extends Partial<IReplaceBody> {}

export type IUpdateResponse = IReplaceResponse
