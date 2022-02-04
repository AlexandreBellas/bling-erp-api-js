import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface IShopCategory {
  idCategoria: number
  idVinculoLoja: number
  descricaoVinculo: string
}

export type IShopCategoryFilters = Record<string, never>

export type IShopCategoryInfos = Record<string, never>

export interface IShopCategoryResponse {
  idCategoria: number
  idVinculoLoja: string
  descricaoVinculo: string
}

export default function ShopCategories (api: IApiInstance) {
  const config = {
    api,
    singularName: 'categoriaLoja',
    pluralName: 'categoriasLoja'
  }

  const all = async (idLoja: number | string, options?: { raw?: boolean }) => {
    const allMethod = new All<IShopCategoryResponse, IShopCategoryFilters>({
      ...config,
      endpoint: `categoriasLoja/${idLoja}`
    })

    if (options && options.raw) {
      return await allMethod.all({ raw: true })
    } else {
      return await allMethod.all({ raw: false })
    }
  }

  const find = async (
    idLoja: number | string,
    idCategoria: number | string,
    options?: { raw?: boolean }
  ) => {
    const findMethod = new Find<IShopCategoryResponse, IShopCategoryInfos>({
      ...config,
      endpoint: `categoriasLoja/${idLoja}`
    })

    if (options && options.raw) {
      return await findMethod.find(idCategoria, { raw: true })
    } else {
      return await findMethod.find(idCategoria, { raw: false })
    }
  }

  const create = async (
    idLoja: number | string,
    data: IShopCategory,
    options?: {
      raw?: boolean
    }
  ) => {
    const createMethod = new Create<IShopCategory, IShopCategoryResponse>({
      ...config,
      endpoint: `categoriasLoja/${idLoja}`
    })

    if (options && options.raw) {
      return await createMethod.create(data, { raw: true })
    } else {
      return await createMethod.create(data, { raw: false })
    }
  }

  const update = async (
    idLoja: number | string,
    idCategoria: number | string,
    data: IShopCategory,
    options?: {
      raw?: boolean
    }
  ) => {
    const updateMethod = new Update<IShopCategory, IShopCategoryResponse>({
      ...config,
      endpoint: `categoriasLoja/${idLoja}`
    })

    if (options && options.raw) {
      return await updateMethod.update(idCategoria, data, { raw: true })
    } else {
      return await updateMethod.update(idCategoria, data, { raw: false })
    }
  }

  return Object.assign(config, {
    all,
    find,
    create,
    update
  })
}
