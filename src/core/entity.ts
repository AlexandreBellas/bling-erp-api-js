import createError from './createError'
import { AxiosInstance, AxiosError } from 'axios'
import * as qs from 'querystring'
import * as xml2js from 'xml2js'

export interface ISingularEntity<T> {
  [singular: string]: T
}

export interface IPluralEntity<T> {
  [plural: string]: ISingularEntity<T>[] | ISingularEntity<T>
}

export interface ISingularError {
  erro: {
    cod: string
    msg: string
  }
}

export interface IDeleteError {
  [code: string]: string
}

export interface IPluralError {
  erros: ISingularError[] | IDeleteError
}

export interface IPluralResponse<T> {
  retorno: IPluralEntity<T> | IPluralError
}

export interface ISingularResponse<T> {
  retorno: ISingularEntity<T> | IPluralError
}

export default class BaseEntity<IEntity, IFilters, IInfos, IEntityResponse> {
  api: AxiosInstance
  #apiKey: string
  qs: typeof qs
  xml2js: typeof xml2js
  singularName: string
  pluralName: string

  constructor (api: AxiosInstance, apiKey: string) {
    this.api = api
    this.#apiKey = apiKey

    this.qs = qs
    this.xml2js = xml2js

    this.singularName = ''
    this.pluralName = ''
  }

  public async all(options?: {
    params?: IFilters
    raw?: false
  }): Promise<IEntityResponse[]>

  public async all(options?: {
    params?: IFilters
    raw: true
  }): Promise<IPluralResponse<IEntityResponse>>

  public async all (
    options: {
      params?: IFilters
      raw?: boolean
    } = {}
  ): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    return await this._getAll(this.pluralName, options && options.params)
  }

  public async find(
    id: number | string,
    options?: { params?: IInfos; raw?: false }
  ): Promise<IEntityResponse | IEntityResponse[]>

  public async find(
    id: number | string,
    options?: { params?: IInfos; raw: true }
  ): Promise<IPluralResponse<IEntityResponse>>

  public async find (
    id: number | string,
    options?: {
      params?: IInfos
      raw?: boolean
    }
  ): Promise<
    IEntityResponse | IEntityResponse[] | IPluralResponse<IEntityResponse>
  > {
    return await this._find(
      this.singularName,
      id,
      options && options.params,
      options && options.raw
    )
  }

  public async findBy(
    options: IFilters & IInfos,
    raw?: false
  ): Promise<IEntityResponse[]>

  public async findBy(
    options: IFilters & IInfos,
    raw: true
  ): Promise<IPluralResponse<IEntityResponse>>

  public async findBy (
    options: IFilters & IInfos,
    raw?: boolean
  ): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    if (!options) {
      throw createError(
        'No options passed to `.findBy()` method',
        500,
        options,
        'ERR_INCORRECT_OPTIONS_ARG'
      )
    }

    return await this._getAll(this.pluralName, options, raw)
  }

  public async create(data: IEntity, raw?: false): Promise<IEntityResponse>

  public async create(
    data: IEntity,
    raw: true
  ): Promise<IPluralResponse<IEntityResponse>>

  public async create (
    data: IEntity,
    raw?: boolean
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    return await this._create(this.singularName, data, raw)
  }

  public async update(
    id: number | string,
    data: IEntity,
    raw?: false
  ): Promise<IEntityResponse>

  public async update(
    id: number | string,
    data: IEntity,
    raw: true
  ): Promise<IPluralResponse<IEntityResponse>>

  public async update (
    id: number | string,
    data: IEntity,
    raw?: boolean
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    return await this._update(this.singularName, id, data, raw)
  }

  public async delete(
    id: number | string,
    raw?: false
  ): Promise<IEntityResponse>

  public async delete(
    id: number | string,
    raw: true
  ): Promise<IPluralResponse<IEntityResponse>>

  public async delete (
    id: number | string,
    raw?: boolean
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    return await this._delete(this.singularName, id, raw)
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
    rawParams?: IFilters,
    raw = false
  ): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    // @TODO: refactor filter logic to actually work
    const entities: IEntityResponse[] = []

    const params: { filters?: string } = {}
    if (rawParams) {
      const typedParams = rawParams as unknown as { [key: string]: string }
      const filters = Object.keys(rawParams)
        .map((key: string) =>
          typedParams[key] ? `${key}[${typedParams[key]}]` : null
        )
        .filter((item) => !!item)
        .join(';')

      params.filters = filters
    }

    let hasMore = true
    let reqCount = 0
    let page = 1

    while (hasMore) {
      const response = await this.api.get(`/${endpoint}/page=${page}/json`, {
        params
      })

      const rawData = response.data as IPluralResponse<IEntityResponse>
      const data = rawData.retorno

      if (data.erros) {
        hasMore = false
      } else {
        const rawNewEntities = data as IPluralEntity<IEntityResponse>

        const newEntities = rawNewEntities[
          this.pluralName
        ] as ISingularEntity<IEntityResponse>[]

        const singularEntities = newEntities.map(
          (item) => item[this.singularName]
        )
        for (const entity of singularEntities) {
          entities.push(entity)
        }
      }

      page++

      reqCount++
      if (reqCount === 3) {
        const sleep = new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })

        await sleep

        reqCount = 0
      }
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
  protected async _find (
    endpoint: string,
    id: number | string,
    params: IFilters | IInfos | (IFilters & IInfos) | undefined = undefined,
    raw = false
  ): Promise<
    IEntityResponse | IEntityResponse[] | IPluralResponse<IEntityResponse>
  > {
    if (!id) {
      throw createError(
        'The "id" argument must be a number or string.',
        500,
        id,
        'ERR_INCORRECT_ID_ARG'
      )
    }

    const response = await this.api.get(`/${endpoint}/${id}/json`, {
      params
    })

    const data = response.data as IPluralResponse<IEntityResponse>
    if (data.retorno.erros) {
      const errReturn = data.retorno as IPluralError
      let errData
      if (raw) {
        errData = { retorno: errReturn }
      } else {
        // maybe enhance it to include JSON API standards?
        const rawErrData = errReturn.erros as ISingularError[]
        errData = rawErrData.map((err: ISingularError) => err.erro)
      }

      throw createError(
        'Error on find method after request call',
        response.status,
        errData,
        'ERR_FIND_METHOD'
      )
    } else {
      if (raw) {
        return data
      } else {
        const rawResponse = data.retorno as IPluralEntity<IEntityResponse>
        const rawEntity = rawResponse[
          this.pluralName
        ] as ISingularEntity<IEntityResponse>[]

        if (rawEntity.length === 1) {
          return rawEntity[0][this.singularName]
        } else {
          return rawEntity.map((entity) => entity[this.singularName])
        }
      }
    }
  }

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
  protected async _create (
    endpoint: string,
    data: IEntity,
    raw = false
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    if (typeof data !== 'object' || Object.keys(data).length === 0) {
      throw createError(
        'The "data" argument must be a not empty object',
        500,
        data,
        'ERR_INCORRECT_DATA_ARG'
      )
    }

    const xmlBuilder = new this.xml2js.Builder({ rootName: this.singularName })
    const xml = xmlBuilder.buildObject({
      ...data
    })

    const params = {
      xml
    }

    const response = await this.api
      .post(`/${endpoint}/json`, this.qs.stringify(params))
      .catch((err: AxiosError) => {
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

  /**
   * Update an entity on the given endpoint.
   * @protected
   * @access protected
   * @async
   * @param endpoint The entity request endpoint.
   * @param id The entity code or id.
   * @param data The data for the entity to be updated.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @return The updated entity.
   */
  protected async _update (
    endpoint: string,
    id: number | string,
    data: IEntity,
    raw = false
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

    const xmlBuilder = new this.xml2js.Builder()
    const xml = xmlBuilder.buildObject({
      ...data
    })

    const params = {
      apikey: this.#apiKey,
      xml
    }

    const response = await this.api
      .put(`/${endpoint}/${id}/json`, this.qs.stringify(params))
      .catch((err: AxiosError) => {
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
  protected async _delete (
    endpoint: string,
    id: number | string,
    raw = false
  ): Promise<IEntityResponse | IPluralResponse<IEntityResponse>> {
    const response = await this.api
      .delete(`/${endpoint}/${id}/json`)
      .catch((err: AxiosError) => {
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
      if (raw) {
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
      if (raw) {
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
