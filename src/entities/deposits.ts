import BlingEntity from '../core/entity'
import { AxiosInstance as IAxiosInstance } from 'axios'

export interface IDeposit {
  descricao?: string
  desconsiderarSaldo?: boolean
  depositoPadrao?: boolean
  situacao?: 'A' | 'I'
}

export interface IDepositFilters {
  situacao?: 'A' | 'I'
}

export type IDepositResponse = IDeposit

export default class Deposits extends BlingEntity<
  IDeposit,
  IDepositFilters,
  Record<string, never>,
  IDepositResponse
> {
  constructor (api: IAxiosInstance, apiKey: string) {
    super(api, apiKey)

    this.singularName = 'deposito'
    this.pluralName = 'depositos'
  }
}
