import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface IDeposit {
  descricao?: string
  desconsiderarSaldo?: boolean
  depositoPadrao?: boolean
  situacao?: 'A' | 'I'
}

export interface IDepositFilters {
  situacao?: 'A' | 'I'
}

export type IDepositInfos = Record<string, never>

export interface IDepositResponse {
  id: string
  descricao: string
  situacao: string
  depositaoPadrao: string
  desconsiderarSaldo: 'true' | 'false'
}

export default function Deposits (api: IApiInstance) {
  const config = {
    api,
    singularName: 'deposito',
    pluralName: 'depositos'
  }

  return Object.assign(config, {
    all: new All<IDepositResponse, IDepositFilters, IDepositInfos>().all,
    find: new Find<IDepositResponse, IDepositInfos>().find,
    findBy: new FindBy<IDepositResponse, IDepositFilters, IDepositInfos>()
      .findBy,
    create: new Create<IDeposit, IDepositResponse>().create,
    update: new Update<IDeposit, IDepositResponse>().update
  })
}
