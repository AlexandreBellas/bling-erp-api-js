import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'

export interface IGroupProductFilters {
  nome?: string
  nomePai?: string
}

export type IGroupProductInfos = Record<string, never>

export interface IGroupProductResponse {
  id: string
  nome: string
  idPai?: string
  nomePai?: string
}

export default function GroupProducts (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'grupoprodutos',
    pluralName: 'gruposprodutos'
  }

  return Object.assign(config, {
    all: new All<
      IGroupProductResponse,
      IGroupProductFilters,
      IGroupProductInfos
    >().all,
    find: new Find<IGroupProductResponse, IGroupProductInfos>().find,
    findBy: new FindBy<
      IGroupProductResponse,
      IGroupProductFilters,
      IGroupProductInfos
    >().findBy
  })
}
