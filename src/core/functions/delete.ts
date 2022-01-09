import {
  IPluralResponse,
  IPluralEntity,
  IPluralError,
  ISingularEntity,
  IDeleteError,
  IApiError
} from '../interfaces/method'

import Method from '../template/method'
import createError from '../helpers/createError'

export default class Find<IEntityResponse> extends Method {
  /**
   * Delete an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param id The entity code or id.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @returns The deleted entity.
   */
  public async delete(
    id: number | string,
    options?: {
      raw?: false
    }
  ): Promise<IEntityResponse>

  public async delete(
    id: number | string,
    options?: {
      raw: true
    }
  ): Promise<IPluralResponse<IEntityResponse>>

  public async delete (
    id: number | string,
    options?: {
      raw?: boolean
    }
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    const endpoint = this.endpoint || this.singularName

    const response = await this.api
      .delete(`/${endpoint}/${id}/json`)
      .catch((err: IApiError) => {
        const errResponse = err.response

        throw createError(
          `Error on delete method during request call: ${err.message}`,
          err.response?.status || 400,
          errResponse,
          err.code || 'ERR_DELETE_REQUEST_FAILURE'
        )
      })

    const data = response.data as IPluralResponse<IEntityResponse>
    if (data.retorno.erros) {
      const errReturn = data.retorno as IPluralError
      let errData
      if (options && options.raw) {
        errData = { retorno: errReturn }
      } else {
        // maybe enhance it to include JSON API standards?
        const rawErrData = errReturn.erros as IDeleteError

        errData = Object.keys(rawErrData).map((code) => ({
          cod: code,
          msg: rawErrData[code]
        }))
      }

      throw createError(
        'Error on delete method after request call',
        response.status,
        errData,
        'ERR_ENTITY_DELETION_FAILURE'
      )
    } else {
      if (options && options.raw) {
        return data
      } else {
        const rawResponse = data.retorno as IPluralEntity<IEntityResponse>
        const rawEntity = rawResponse[
          this.pluralName
        ] as ISingularEntity<IEntityResponse>[]
        return rawEntity[0][this.singularName]
      }
    }
  }
}
