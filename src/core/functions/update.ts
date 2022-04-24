import {
  IPluralResponse,
  IPluralEntity,
  ISingularEntity,
  IApiError
} from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'

import xml2js from 'xml2js'
import handleApiError from '../helpers/handleApiError'
import handlePostApiError from '../helpers/handlePostApiError'

export default class Update<IEntity, IEntityResponse> extends Method {
  /**
   * Update an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param id The entity code or id.
   * @param data The data for the entity to be updated.
   * @param options The options object.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @return The updated entity.
   */
  public async update(
    id: number | string,
    data: IEntity,
    options?: {
      raw?: false
    }
  ): Promise<IEntityResponse>

  public async update(
    id: number | string,
    data: IEntity,
    options?: {
      raw: true
    }
  ): Promise<IPluralResponse<IEntityResponse>>

  public async update (
    id: number | string,
    data: IEntity,
    options?: {
      raw?: boolean
    }
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    if (typeof data !== 'object' || Object.keys(data).length === 0) {
      throw createError({
        name: 'BlingUpdateError',
        message: 'The "data" argument must be a not empty object',
        status: '500',
        data,
        code: 'ERR_INCORRECT_UPDATE_DATA'
      })
    }

    if (!id || typeof id === 'object' || Array.isArray(id)) {
      throw createError({
        name: 'BlingUpdateError',
        message: 'The "id" argument must be a number or string',
        status: '500',
        data: { id },
        code: 'ERR_INCORRECT_UPDATE_ID'
      })
    }

    const xmlBuilder = new xml2js.Builder()
    const xml = xmlBuilder.buildObject(data)

    const params = {
      xml
    }

    const endpoint = this.endpoint || this.singularName
    const raw = options && options.raw !== undefined ? options.raw : this.raw

    const response = await this.api
      .put(`/${endpoint}/${id}/json`, params)
      .catch((err: IApiError) => {
        const errorData = {
          name: 'BlingRequestError',
          message: `Error on update method during request call: ${err.message}`,
          status: String(err.response?.status) || '400',
          code: err.code || 'ERR_PUT_REQUEST_FAILURE'
        }

        return handleApiError({
          err,
          errorData,
          raw
        })
      })

    const rawData = response.data as IPluralResponse<IEntityResponse>
    const responseData = rawData.retorno

    if (responseData.erros) {
      const errorData = {
        name: 'BlingRequestError',
        message: 'Error on update method after request call',
        status: '400',
        code: 'ERR_UPDATE_METHOD_FAILURE'
      }

      return handlePostApiError({
        rawData,
        errorData,
        raw
      })
    } else {
      if (raw) {
        return rawData
      } else {
        const rawResponse = responseData as IPluralEntity<IEntityResponse>

        if (Array.isArray(rawResponse[this.pluralName])) {
          const rawEntity = rawResponse[
            this.pluralName
          ] as ISingularEntity<IEntityResponse>[]
          return rawEntity[0][this.singularName]
        } else {
          const rawEntity = rawResponse[
            this.pluralName
          ] as ISingularEntity<IEntityResponse>
          return rawEntity[this.singularName]
        }
      }
    }
  }
}
