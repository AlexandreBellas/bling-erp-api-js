import { IPluralResponse } from '../interfaces/method'

import All from './all'
import Method from '../template/method'
import createError from '../helpers/createError'

export default class FindBy<IEntityResponse, IFilters, IInfo> extends Method {
  public async findBy(
    params: {
      filters: IFilters
      infos?: IInfo
    },
    options?: { raw?: false }
  ): Promise<IEntityResponse[]>

  public async findBy(
    params: {
      filters: IFilters
      infos?: IInfo
    },
    options?: {
      raw: true
    }
  ): Promise<IPluralResponse<IEntityResponse>>

  public async findBy (
    params: {
      filters: IFilters
      infos?: IInfo
    },
    options?: {
      raw?: boolean
    }
  ): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    if (!params) {
      throw createError(
        'No options passed to `.findBy()` method',
        500,
        params,
        'ERR_INCORRECT_OPTIONS_ARG'
      )
    }

    if (!params.filters) {
      throw createError(
        'No filters passed to `.findBy()` method',
        500,
        params,
        'ERR_INCORRECT_OPTIONS_FILTERS_ARG'
      )
    }

    const config = {
      api: this.api,
      endpoint: this.endpoint,
      singularName: this.singularName,
      pluralName: this.pluralName
    }

    const allEntity = new All<IEntityResponse, IFilters, IInfo>(config)

    // @TODO: deal with interfaces problems to reuse code properly
    if (options && options.raw) {
      return await allEntity.all({
        params,
        raw: true
      })
    } else {
      return await allEntity.all({
        params,
        raw: false
      })
    }
  }
}
