import {
  IPluralResponse,
  IPluralEntity,
  ISingularEntity
} from '../interfaces/method'

import Method from '../template/method'

export default class All<IEntityResponse, IFilters> extends Method {
  /**
   * Retrieve all entities from the given endpoint.
   * @private
   * @access private
   * @async
   * @param endpoint The entity request endpoint.
   * @param params The query params for the request sent by the user.
   * @param raw Boolean value to return either raw data from Bling or beautified processed data.
   * @returns An array of entities.
   */
  public async all(options?: {
    params?: IFilters
    raw?: false
  }): Promise<IEntityResponse[]>

  public async all(options?: {
    params?: IFilters
    raw: true
  }): Promise<IPluralResponse<IEntityResponse>>

  public async all (options?: {
    params?: IFilters
    raw?: boolean
  }): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    // @TODO: refactor filter logic to actually work
    const entities: IEntityResponse[] = []

    const params: { filters?: string } = {}
    if (options && options.params) {
      const typedParams = options.params as unknown as { [key: string]: string }
      const filters = Object.keys(options.params)
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
      const response = await this.api.get(
        `/${this.pluralName}/page=${page}/json`,
        {
          params
        }
      )

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

    if (options && options.raw) {
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
}
