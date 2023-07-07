import { IResponse } from '../interfaces/method'

import All from './all'
import Method from '../template/method'
import createError from '../helpers/createError'

export default class FindBy<IEntityResponse, IFilters, IInfo> extends Method {
  /**
   * Retrieve entities that match a certain filter.
   * @private
   * @access private
   * @async
   * @param params The params to filter or enhance the response.
   * @param filters The filters used for the query.
   * @param infos Parameters to enhance the response data.
   * @param options The options object.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @param page The response page with pagination is desired.
   */

  public async findBy<Raw extends boolean> (
    params: {
      filters: IFilters
      infos?: IInfo
    },
    options?: {
      raw?: Raw
      page?: number
    }
  ): Promise<IResponse<Raw, IEntityResponse>> {
    if (!params) {
      throw createError({
        name: 'BlingFindByError',
        message: 'No options passed to `.findBy()` method',
        status: '500',
        data: { params },
        code: 'ERR_INCORRECT_FINDBY_OPTIONS'
      })
    }

    if (!params.filters) {
      throw createError({
        name: 'BlingFindByError',
        message: 'No filters passed to `.findBy()` method',
        status: '500',
        data: { params },
        code: 'ERR_INCORRECT_FINDBY_OPTION_FILTERS'
      })
    }

    const raw = options && options.raw !== undefined ? options.raw : this.raw

    const config = {
      api: this.api,
      raw,
      endpoint: this.endpoint,
      singularName: this.singularName,
      pluralName: this.pluralName
    }

    const allEntity = new All<IEntityResponse, IFilters, IInfo>(config)

    // @TODO: deal with interfaces problems to reuse code properly
    if (raw) {
      return (await allEntity.all({
        params,
        raw: true,
        page: options && options.page
      })) as IResponse<Raw, IEntityResponse>
    } else {
      return await allEntity.all({
        params,
        page: options && options.page
      })
    }
  }
}
