import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'

export interface IGroupProductsFilters {
  nome?: string
  nomePai?: string
}

export type IGroupProductsInfos = Record<string, never>

export interface IGroupProductsResponse {
  id: string
  nome: string
  idPai?: string
  nomePai?: string
}

export default function GroupProducts (api: IApiInstance) {
  const config = {
    api,
    singularName: 'grupoprodutos',
    pluralName: 'gruposprodutos'
  }

  return Object.assign(config, {
    all: new All<IGroupProductsResponse, IGroupProductsFilters>().all,
    find: new Find<IGroupProductsResponse, IGroupProductsInfos>().find,
    findBy: new FindBy<IGroupProductsResponse, IGroupProductsFilters>().findBy
  })
}
