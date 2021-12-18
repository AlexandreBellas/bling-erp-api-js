import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface ICategory {
  descricao: string
  idCategoriaPai?: number
}

export type ICategoryFilters = Record<string, never>

export type ICategoryInfos = Record<string, never>

export interface ICategoryResponse {
  id: number
  descricao: string
  idCategoriaPai: number
}

export default function Categories (api: IApiInstance) {
  const config = {
    api,
    singularName: 'categoria',
    pluralName: 'categorias'
  }

  return Object.assign(config, {
    all: new All<ICategoryResponse, ICategoryFilters>().all,
    find: new Find<ICategoryResponse, ICategoryInfos>().find,
    findBy: new FindBy<ICategoryResponse, ICategoryFilters>().findBy,
    create: new Create<ICategory, ICategoryResponse>().create,
    update: new Update<ICategory, ICategoryResponse>().update
  })
}
