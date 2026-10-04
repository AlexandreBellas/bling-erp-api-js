import { IStatus12 } from '../types/status12.type'

export interface IChangeStatusParams {
  /**
   * ID idLote
   */
  idLote: number
}

export interface IChangeStatusBody {
  /**
   * `1` Ativo `2` Inativo
   */
  status: IStatus12
}
