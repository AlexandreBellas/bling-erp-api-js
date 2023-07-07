import {
  IPluralResponse,
  IPluralEntity,
  ISingularEntity,
  IApiError,
  IResponse
} from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'
import handleApiError from '../helpers/handleApiError'

export default class Find<IEntityResponse, IInfos> extends Method {
  /**
   * Retrieve one entity from the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param id The entity id.
   * @param options The options object.
   * @param infos Parameters to enhance the response data.
   * @param params The params to filter or enhance the response.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @returns The found entity.
   */

  public async find<Raw extends boolean> (
    id: number | string,
    options?: {
      params?: IInfos
      raw?: Raw
    }
  ): Promise<IResponse<Raw, IEntityResponse>> {
    if (!id) {
      throw createError({
        name: 'BlingFindError',
        message: 'The "id" argument must be a number or string.',
        status: '500',
        data: { id },
        code: 'ERR_INCORRECT_FIND_ID'
      })
    }

    const endpoint = this.endpoint || this.singularName
    const raw = options && options.raw !== undefined ? options.raw : this.raw

    const response = await this.api
      .get(`/${endpoint}/${id}/json`, {
        params: options && options.params
      })
      .catch((err: IApiError) => {
        const errorData = {
          name: 'BlingRequestError',
          message: `Error on find method during request call: ${err.message}`,
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
      const errorData = {
        name: 'BlingRequestError',
        message: 'Error on find method after request call',
        status: String(response.status),
        code: 'ERR_FIND_METHOD_FAILURE'
      }

      return handleApiError({
        rawData,
        errorData,
        raw
      })
    } else {
      if (raw) {
        return rawData as IResponse<Raw, IEntityResponse>
      } else {
        const rawResponse = responseData as IPluralEntity<IEntityResponse>
        const rawEntity = rawResponse[
          this.pluralName
        ] as ISingularEntity<IEntityResponse>[]

        if (rawEntity.length === 1) {
          return rawEntity[0][this.singularName] as IResponse<
            Raw,
            IEntityResponse
          >
        } else {
          return rawEntity.map(
            (entity) => entity[this.singularName]
          ) as IResponse<Raw, IEntityResponse>
        }
      }
    }
  }
}
