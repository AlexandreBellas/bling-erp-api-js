import xml2js from 'xml2js'

import {
  IPluralResponse,
  ISingularEntity,
  IApiError,
  IResponse
} from '../interfaces/method'

import Method from '../template/method'

import createError from '../helpers/createError'
import handleApiError from '../helpers/handleApiError'
import convertArraysToObj from '../helpers/convertArraysToObj'

export default class Create<IEntity, IEntityResponse> extends Method {
  /**
   * Create an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param data The data for the entity to be created.
   * @param options The options object to define the response structure.
   * @param raw Return either raw data from Bling or beautified processed data.
   * @returns The created entity.
   */

  public async create<Raw extends boolean> (
    data: IEntity,
    options?: {
      raw?: Raw
    },
    ...restData: unknown[]
  ): Promise<IResponse<Raw, IEntityResponse>> {
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
      throw createError({
        name: 'BlingCreateError',
        message: 'The "data" argument must be a not empty object',
        status: '500',
        data,
        code: 'ERR_INCORRECT_CREATE_DATA'
      })
    }

    const xmlBuilder = new xml2js.Builder({ rootName: this.singularName })
    const xml = xmlBuilder.buildObject(convertArraysToObj(data))

    const params = {
      xml,
      ...restData
    }

    const endpoint = this.endpoint || this.singularName
    const raw = options && options.raw !== undefined ? options.raw : this.raw

    const response = await this.api
      .post(`/${endpoint}/json`, params)
      .catch((err: IApiError) => {
        const errorData = {
          name: 'BlingRequestError',
          message: `Error on create method during request call: ${err.message}`,
          status: String(err.response?.status) || '400',
          code: err.code || 'ERR_POST_REQUEST_FAILURE'
        }

        const rawData = err.response?.data as
          | IPluralResponse<IEntityResponse>
          | ''

        if (rawData === '') {
          console.log(err.response?.data)
          throw createError({
            ...errorData,
            data: {
              errors: [
                {
                  title: 'Empty return',
                  detail: 'The request has gotten an empty return.'
                }
              ]
            }
          })
        } else {
          return handleApiError({
            rawData,
            errorData,
            raw
          })
        }
      })

    const rawData = response.data as IPluralResponse<IEntityResponse>
    const responseData = rawData.retorno

    if (responseData.erros) {
      /**
       * It can return as (most of the cases)
       *  {
       *    retorno: {
       *      erros: {
       *        cod: string,
       *        msg: string
       *      }[]
       *    }
       *  }
       *
       * or (paymentMethod case)
       *  {
       *    retorno: {
       *      [cod: string]: string
       *    }[]
       *  }
       *
       * or (also paymentMethod case)
       * {
       *   retorno: string[]
       * }
       *  */
      const errorData = {
        name: 'BlingRequestError',
        message: 'Error on create method after request call',
        status: '400',
        code: 'ERR_CREATE_METHOD_FAILURE'
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

        if (
          Array.isArray(
            (rawResponse as { [key: string]: unknown })[this.pluralName]
          )
        ) {
          /**
           * It can return as (most of the cases)
           *  {
           *    retorno: {
           *      [pluralName]: {
           *        [singularName]: IEntityResponse
           *      }[]
           *    }
           *  }
           *
           * or (paymentMethod case)
           *  {
           *    retorno: {
           *      [pluralName]: IEntityResponse[]
           *    }
           *  }
           *  */
          const rawEntity = (rawResponse as { [key: string]: unknown })[
            this.pluralName
          ] as ISingularEntity<IEntityResponse>[] | IEntityResponse[]

          if (
            Object.keys(rawEntity[0] as { [key: string]: unknown }).length === 1
          ) {
            const arrRawReturn = rawEntity as ISingularEntity<IEntityResponse>[]
            return arrRawReturn.map(
              (entity) => entity[this.singularName]
            ) as IResponse<Raw, IEntityResponse>
          } else {
            return rawEntity as IResponse<Raw, IEntityResponse>
          }
        } else {
          const rawEntity = (rawResponse as { [key: string]: unknown })[
            this.pluralName
          ] as IResponse<Raw, IEntityResponse>
          return [
            (rawEntity as { [key: string]: unknown })[this.singularName]
          ] as IResponse<Raw, IEntityResponse>
        }
      }
    }
  }
}
