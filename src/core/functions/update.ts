import {
  IPluralResponse,
  IPluralEntity,
  IPluralError,
  ISingularEntity,
  ISingularError,
  IApiError
} from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'

import xml2js from 'xml2js'

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
      throw createError(
        'The "data" argument must be a not empty object',
        500,
        data,
        'ERR_INCORRECT_DATA_ARG'
      )
    }

    if (!id || typeof id === 'object' || Array.isArray(id)) {
      throw createError(
        'The "id" argument must be a number or string',
        500,
        id,
        'ERR_INCORRECT_DATA_ID'
      )
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
        const errResponse = err.response

        throw createError(
          `Error on update method during request call: ${err.message}`,
          err.response?.status || 400,
          errResponse,
          err.code || 'ERR_UPDATE_REQUEST_FAILURE'
        )
      })

    const responseData = response.data as IPluralResponse<IEntityResponse>
    if (responseData.retorno.erros) {
      const errReturn = responseData.retorno as IPluralError
      let errData
      if (raw) {
        errData = { retorno: errReturn }
      } else {
        // maybe enhance it to include JSON API standards?
        const rawErrData = errReturn.erros as ISingularError[]
        errData = rawErrData.map((err: ISingularError) => err.erro)
      }

      throw createError(
        'Error on update method after request call',
        400,
        errData,
        'ERR_ENTITY_UPDATING_FAILURE'
      )
    } else {
      if (raw) {
        return responseData
      } else {
        const rawResponse =
          responseData.retorno as IPluralEntity<IEntityResponse>

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
