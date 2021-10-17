import createError from './createError'
import { AxiosInstance } from 'axios'
import * as qs from 'querystring'
import * as xml2js from 'xml2js'

export interface BlingBaseResponse<T> {
  retorno: T
}

export default class BlingBaseEntity<
  IEntity,
  IFilters,
  IInfos,
  IResponse,
  IError
> {
  api: AxiosInstance
  qs: typeof qs
  xml2js: typeof xml2js
  singularName: string
  pluralName: string

  constructor (api: AxiosInstance) {
    this.api = api

    this.qs = qs
    this.xml2js = xml2js

    this.singularName = ''
    this.pluralName = ''
  }

  async all (params?: IFilters): Promise<IEntity[] | IError> {
    return await this._getAll(this.pluralName, params)
  }

  async find (id: number | string, params?: IInfos): Promise<IEntity | IError> {
    return await this._getOne(this.singularName, String(id), params)
  }

  async findBy (params?: IFilters & IInfos): Promise<IEntity[] | IError> {
    return await this._getAll(this.pluralName, params)
  }

  async create (data: IEntity): Promise<IEntity | IError> {
    return await this._create(this.singularName, data)
  }

  async update (id: number, data: IEntity): Promise<IEntity | IError> {
    return await this._update(this.singularName, id, data)
  }

  async delete (id: number): Promise<IEntity | IError> {
    return await this._delete(this.singularName, id)
  }

  /**
   * Retrieve all entities from the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param {string} endpoint The entity request endpoint.
   * @param {Object<IParams>} rawQueryParams The query params for the request sent by the user.
   * @param {string[]} acceptedParams The actual useful query params for the request.
   * @returns {Array} An array of entities.
   */
  protected async _getAll (
    endpoint: string,
    params?: IFilters
  ): Promise<IEntity[] | IError> {
    const entities = []

    let hasMore = true
    let page = 1

    while (hasMore) {
      const response = await this.api.get(`/${endpoint}/page=${page}/json`, {
        params
      })

      const rawData = response.data as any
      const { retorno: data } = rawData

      if (data.erros) {
        hasMore = false
      } else {
        // entities.push(...this._extractResponseInformation(data))
        entities.push(...data)
      }

      page++
    }

    return entities
  }

  /**
   * Retrieve one entity from the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param {string} endpoint The entity request endpoint.
   * @param {number} id The entity id.
   * @param {Object} rawQueryParams The query params for the request sent by the user.
   * @param {string[]} acceptedParams The actual useful query params for the request.
   * @returns {Object} The found entity.
   */
  protected async _getOne (
    endpoint: string,
    id: string,
    params?: IFilters | IInfos | (IFilters & IInfos)
  ): Promise<IEntity | IError> {
    const response = await this.api.get(`/${endpoint}/${id}/json`, {
      params
    })

    const rawData = response.data as any
    const { retorno: data } = rawData

    // return this._extractResponseInformation(data)[0]
    return data
  }

  /**
   * Create an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param data The data for the entity to be created.
   */
  protected async _create (
    endpoint: string,
    data: IEntity
  ): Promise<IEntity | IError> {
    if (typeof data !== 'object') {
      throw createError(
        'The "data" argument must be an object.',
        500,
        this,
        'ERR_INCORRECT_DATA_ARG'
      )
    }

    const xmlBuilder = new this.xml2js.Builder()
    const xml = xmlBuilder.buildObject({
      ...data
    })

    const params = {
      xml
    }

    const response = await this.api.post(
      `/${endpoint}/json`,
      this.qs.stringify(params)
    )

    const rawData = response.data as any
    const { retorno: responseData } = rawData

    if (responseData.erros) {
      throw createError(
        responseData.erros[0].erro.msg,
        500,
        this,
        'ERR_ENTITY_CREATION_FAILURE'
      )
    } else {
      // return this._extractResponseInformation(responseData)[0]
      return responseData
    }
  }

  /**
   * Update an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param id The entity code or id.
   * @param data The data for the entity to be updated.
   */
  protected async _update (
    endpoint: string,
    id: number,
    data: IEntity
  ): Promise<IEntity | IError> {
    if (typeof data !== 'object') {
      throw createError(
        'The "data" argument must be an object.',
        500,
        this,
        'ERR_INCORRECT_DATA_ARG'
      )
    }

    if (!id || typeof id === 'object' || Array.isArray(id)) {
      throw createError(
        'The "id" argument must be a number or string.',
        500,
        this,
        'ERR_INCORRECT_DATA_ID'
      )
    }

    const xmlBuilder = new this.xml2js.Builder()
    const xml = xmlBuilder.buildObject({
      ...data
    })

    const params = {
      xml
    }

    const response = await this.api.put(
      `/${endpoint}/${id}/json`,
      this.qs.stringify(params)
    )

    const rawData = response.data as any
    const { retorno: responseData } = rawData

    if (responseData.erros) {
      throw createError(
        responseData.erros[0].erro.msg,
        500,
        this,
        'ERR_ENTITY_UPDATING_FAILURE'
      )
    } else {
      // return this._extractResponseInformation(responseData)[0]
      return responseData
    }
  }

  /**
   * Delete an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param id The entity code or id.
   */
  protected async _delete (
    endpoint: string,
    id: number
  ): Promise<IEntity | IError> {
    const response = await this.api.delete(`/${endpoint}/${id}/json`)

    const rawData = response.data as any
    const { retorno: responseData } = rawData

    if (responseData.erros) {
      throw createError(
        responseData.erros[0].erro.msg,
        500,
        this,
        'ERR_ENTITY_DELETION_FAILURE'
      )
    } else {
      // return this._extractResponseInformation(responseData)[0]
      return responseData
    }
  }

  /**
   * Extract main information after GET request return data.
   * @protected
   * @access protected
   * @async
   * @param data The object returned from the request after "retorno".
   * @returns An array of entities.
   */
  // protected _extractResponseInformation (data: IResponse): Array<IEntity> {
  //   const entities = []

  //   const responseFirstLayer = Object.keys(data)[0] as string
  //   const arrEntities = data[responseFirstLayer] as any[]

  //   entities.push(
  //     ...arrEntities.map((item: any) => {
  //       const responseSecondLayer = Object.keys(item)[0]
  //       return item[responseSecondLayer]
  //     })
  //   )

  //   return entities
  // }
}
