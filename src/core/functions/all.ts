import {
  IPluralResponse,
  IPluralEntity,
  ISingularEntity,
  IApiError,
  IPluralError
} from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'
import packErrorsToJsonApi from '../helpers/packErrorsToJsonApi'
import handleApiError from '../helpers/handleApiError'

export default class All<IEntityResponse, IFilters, IInfo> extends Method {
  /**
   * Retrieve all entities from the given endpoint.
   * @private
   * @access private
   * @async
   * @param params The params to filter or enhance the response.
   * @param infos Parameters to enhance the response data.
   * @param filters The filters used for the query.
   * @param options The options object.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @param page The response page with pagination is desired.
   */

  public async all(options?: {
    params?: {
      filters?: IFilters
      infos?: IInfo
    }
    raw?: false
    page?: number
  }): Promise<IEntityResponse[]>

  public async all(options?: {
    params?: {
      filters?: IFilters
      infos?: IInfo
    }
    raw: true
    page?: number
  }): Promise<IPluralResponse<IEntityResponse>>

  public async all (options?: {
    params?: {
      filters?: IFilters
      infos?: IInfo
    }
    raw?: boolean
    page?: number
  }): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    const entities: IEntityResponse[] = []

    const params: { filters?: string; [key: string]: unknown } = {}

    const endpoint = this.endpoint || this.pluralName
    const raw = options && options.raw !== undefined ? options.raw : this.raw

    let hasMore = true
    let reqCount = 0
    let page = 1

    let isSinglePage = false

    if (options) {
      if (options.params) {
        if (options.params.filters) {
          const typedParams = options.params.filters as unknown as {
            [key: string]: string
          }
          const filters = Object.keys(options.params.filters)
            .map((key: string) =>
              typedParams[key] ? `${key}[${typedParams[key]}]` : null
            )
            .filter((item) => !!item)
            .join(';')

          params.filters = filters
        }

        if (options.params.infos) {
          for (const infoKey in options.params.infos) {
            params[infoKey] = options.params.infos[infoKey]
          }
        }
      }

      if (options.page) {
        isSinglePage = true
        page = options.page
      }
    }

    while (hasMore) {
      const response = await this.api
        .get(`/${endpoint}/page=${page}/json`, {
          params
        })
        .catch((err: IApiError) => {
          const errorData = {
            name: 'BlingRequestError',
            message: `Error on all method during request call: ${err.message}`,
            status: String(err.response?.status) || '400',
            code: 'ERR_GET_REQUEST_FAILURE'
          }

          const rawData = err.response?.data as IPluralResponse<IEntityResponse>

          return handleApiError({
            rawData,
            errorData,
            raw
          })
        })

      const rawData = response.data as IPluralResponse<IEntityResponse>
      const responseData = rawData.retorno

      if (responseData.erros) {
        hasMore = false

        const pluralError = responseData as IPluralError
        const jsonApiErrorObj = packErrorsToJsonApi(pluralError)

        // If there is an error different than 'not found'
        if (jsonApiErrorObj.errors.some((err) => err.code !== '14')) {
          const errorData = {
            name: 'BlingRequestError',
            message: 'Error on all method after request call',
            status: '400',
            code: 'ERR_ALL_METHOD_FAILURE'
          }

          if (raw) {
            throw createError({
              ...errorData,
              data: rawData
            })
          } else {
            throw createError({
              ...errorData,
              data: jsonApiErrorObj
            })
          }
        }
      } else {
        const rawNewEntities = responseData as IPluralEntity<IEntityResponse>

        const newEntities = rawNewEntities[
          this.pluralName
        ] as ISingularEntity<IEntityResponse>[]

        const singularEntities = newEntities.map(
          (item) => item[this.singularName]
        )
        for (const entity of singularEntities) {
          entities.push(entity)
        }
      }

      if (isSinglePage) {
        break
      }

      page++

      reqCount++
      if (reqCount === 3) {
        const sleep = new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })

        await sleep

        reqCount = 0
      }
    }

    if (raw) {
      return {
        retorno: {
          [this.pluralName]: entities.map((entity) => ({
            [this.singularName]: entity
          }))
        }
      }
    } else {
      return entities
    }
  }
}
