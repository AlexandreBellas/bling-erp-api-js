import createError from './createError'
import { AxiosInstance } from 'axios'
import * as qs from 'querystring'
import * as xml2js from 'xml2js'

export interface ISingularEntity<T> {
  [singular: string]: T
}

export interface IPluralEntity<T> {
  [plural: string]: ISingularEntity<T>[]
}

export interface ISingularError {
  erro: {
    cod: string
    msg: string
  }
}

export interface IPluralError {
  erros: ISingularError[]
}

export interface IPluralResponse<T> {
  retorno: IPluralEntity<T> | IPluralError
}

export interface ISingularResponse<T> {
  retorno: ISingularEntity<T> | IPluralError
}

export default class BaseEntity<IEntity, IFilters, IInfos, IError> {
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

  async all (options?: {
    params?: IFilters
    raw?: boolean
  }): Promise<IEntity[] | IPluralResponse<IEntity>> {
    return await this._getAll(this.pluralName, options && options.params)
  }

  async find (
    id: number | string,
    options?: {
      params?: IInfos
      raw?: boolean
    }
  ): Promise<IEntity | IPluralResponse<IEntity>> {
    return await this._getOne(
      this.singularName,
      String(id),
      options && options.params,
      options && options.raw
    )
  }

  async findBy (options?: {
    params?: IFilters & IInfos
  }): Promise<IEntity[] | IPluralResponse<IEntity> | IError> {
    return await this._getAll(this.pluralName, options && options.params)
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
   * @param endpoint The entity request endpoint.
   * @param params The query params for the request sent by the user.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @returns An array of entities.
   */
  protected async _getAll (
    endpoint: string,
    params?: IFilters,
    raw: boolean = true
  ): Promise<IEntity[] | IPluralResponse<IEntity>> {
    const entities: IEntity[] = []

    let hasMore = true
    let page = 1

    while (hasMore) {
      const response = await this.api.get(`/${endpoint}/page=${page}/json`, {
        params
      })

      const rawData = response.data as IPluralResponse<IEntity>
      const data = rawData.retorno

      if (data.erros) {
        hasMore = false
      } else {
        const rawNewEntities = data as IPluralEntity<IEntity>
        const newEntities = rawNewEntities[this.pluralName].map(
          (item) => item[this.singularName]
        )
        for (const entity of newEntities) {
          entities.push(entity)
        }
      }

      page++
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

  /**
   * Retrieve one entity from the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param id The entity id.
   * @param params The query params for the request sent by the user.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @returns The found entity.
   */
  protected async _getOne (
    endpoint: string,
    id: string,
    params: IFilters | IInfos | (IFilters & IInfos) | undefined = undefined,
    raw: boolean | undefined = true
  ): Promise<IEntity | IPluralResponse<IEntity>> {
    const response = await this.api.get(`/${endpoint}/${id}/json`, {
      params
    })

    const data = response.data as IPluralResponse<IEntity>
    if (raw) {
      return data
    } else {
      const rawResponse = data.retorno as IPluralEntity<IEntity>
      const rawEntity = rawResponse[this.pluralName][0]
      return rawEntity[this.singularName]
    }
  }

  /**
   * Create an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param data The data for the entity to be created.
   * @returns The created entity.
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
   * @return The updated entity.
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
   * @returns The deleted entity.
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
      return responseData
    }
  }
}
