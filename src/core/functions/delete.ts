import { IPluralResponse, IApiError, IResponse } from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'
import handleApiError from '../helpers/handleApiError'

export default class Find<IEntityResponse> extends Method {
  /**
   * Delete an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param id The entity code or id.
   * @param options The options object.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @returns The deleted entity.
   */

  public async delete<Raw extends boolean> (
    id: number | string,
    options?: {
      raw?: Raw
    }
  ): Promise<IResponse<Raw, IEntityResponse>> {
    if (!id || typeof id === 'object' || Array.isArray(id)) {
      throw createError({
        name: 'BlingDeleteError',
        message: 'The "id" argument must be a number or string',
        status: '500',
        data: { id },
        code: 'ERR_INCORRECT_DELETE_ID'
      })
    }

    const endpoint = this.endpoint || this.singularName
    const raw = options && options.raw !== undefined ? options.raw : this.raw

    const response = await this.api
      .delete<IPluralResponse<IEntityResponse>>(`/${endpoint}/${id}/json`)
      .catch((err: IApiError) => {
        const errorData = {
          name: 'BlingRequestError',
          message: `Error on delete method during request call: ${err.message}`,
          status: String(err.response?.status) || '400',
          code: err.code || 'ERR_DELETE_REQUEST_FAILURE'
        }

        const rawData = err.response?.data as IPluralResponse<IEntityResponse>

        return handleApiError({
          rawData,
          errorData,
          raw
        })
      })

    const rawData = response.data
    const responseData = rawData.retorno

    if (responseData.erros) {
      const errorData = {
        name: 'BlingRequestError',
        message: 'Error on delete method after request call',
        status: '400',
        code: 'ERR_DELETE_METHOD_FAILURE'
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
        const rawResponse = responseData
        const rawEntity = (rawResponse as { [key: string]: unknown })[
          this.pluralName
        ]
        return (
          rawEntity as unknown as Array<{
            [key: string]: IResponse<Raw, IEntityResponse>
          }>
        )[0][this.singularName]
      }
    }
  }
}
