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

import * as xml2js from 'xml2js'

export default class Create<IEntity, IEntityResponse> extends Method {
  /**
   * Create an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param data The data for the entity to be created.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @returns The created entity.
   */
  public async create(
    data: IEntity,
    raw?: false,
    ...restData: unknown[]
  ): Promise<IEntityResponse>

  public async create(
    data: IEntity,
    raw: true,
    ...restData: unknown[]
  ): Promise<IPluralResponse<IEntityResponse>>

  public async create (
    data: IEntity,
    raw?: boolean,
    ...restData: unknown[]
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    if (typeof data !== 'object' || Object.keys(data).length === 0) {
      throw createError(
        'The "data" argument must be a not empty object',
        500,
        data,
        'ERR_INCORRECT_DATA_ARG'
      )
    }

    const xmlBuilder = new xml2js.Builder({ rootName: this.singularName })
    const xml = xmlBuilder.buildObject({
      ...data
    })

    const params = {
      xml,
      ...restData
    }

    const response = await this.api
      .post(`/${this.singularName}/json`, params)
      .catch((err: IApiError) => {
        throw createError(
          `Error on create method during request call: ${err.message}`,
          err.response?.status || 400,
          err.response?.data || null,
          err.code || 'ERR_POST_REQUEST_FAILURE'
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
        'Error on create method after request call',
        400,
        errData,
        'ERR_ENTITY_CREATION_FAILURE'
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
