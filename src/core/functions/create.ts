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
  public async create(
    data: IEntity,
    options?: {
      raw?: false
    },
    ...restData: unknown[]
  ): Promise<IEntityResponse>

  public async create(
    data: IEntity,
    options?: {
      raw: true
    },
    ...restData: unknown[]
  ): Promise<IPluralResponse<IEntityResponse>>

  public async create (
    data: IEntity,
    options?: {
      raw?: boolean
    },
    ...restData: unknown[]
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    if (typeof data !== 'object' || Object.keys(data).length === 0) {
      throw createError({
        name: 'BlingCreateError',
        message: 'The "data" argument must be a not empty object',
        status: '500',
        data,
        code: 'ERR_INCORRECT_CREATE_DATA'
      })
    }

    const xmlBuilder = new xml2js.Builder({ rootName: this.singularName })
    const xml = xmlBuilder.buildObject(data)

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

        return handleApiError({
          err,
          errorData,
          raw
        })
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
          const rawEntity = rawResponse[this.pluralName] as
            | ISingularEntity<IEntityResponse>[]
            | IEntityResponse[]

          if (Object.keys(rawEntity[0]).length === 1) {
            const rawReturn = rawEntity[0] as ISingularEntity<IEntityResponse>
            return rawReturn[this.singularName] as IEntityResponse
          } else {
            const rawReturn = rawEntity[0] as IEntityResponse
            return rawReturn
          }
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
