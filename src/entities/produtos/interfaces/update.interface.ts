import { IReplaceBody, IReplaceResponse } from './replace.interface'

export interface IUpdateParams {
  /**
   * ID do produto
   */
  idProduto: number
}

export interface IUpdateBody extends Partial<
  Omit<IReplaceBody, 'variacoes'>
> {
  variacoes?: Partial<NonNullable<IReplaceBody['variacoes']>[number]>[]
}

export type IUpdateResponse = IReplaceResponse
