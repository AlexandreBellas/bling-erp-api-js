import { IPluralResponse } from '../interfaces/method'

import All from './all'
import Method from '../template/method'
import createError from '../helpers/createError'

export default class FindBy<IEntityResponse, IQuery> extends Method {
  public async findBy(params: IQuery, raw?: false): Promise<IEntityResponse[]>

  public async findBy(
    params: IQuery,
    raw: true
  ): Promise<IPluralResponse<IEntityResponse>>

  public async findBy (
    params: IQuery,
    raw?: boolean
  ): Promise<IEntityResponse[] | IPluralResponse<IEntityResponse>> {
    if (!params) {
      throw createError(
        'No options passed to `.findBy()` method',
        500,
        params,
        'ERR_INCORRECT_OPTIONS_ARG'
      )
    }

    const config = {
      api: this.api,
      singularName: this.singularName,
      pluralName: this.pluralName
    }

    const allEntity = new All<IEntityResponse, IQuery>(config)

    // @TODO: deal with interfaces problems to reuse code properly
    if (raw) {
      return await allEntity.all({
        params,
        raw: true
      })
    } else {
      return await allEntity.all({
        params,
        raw: false
      })
    }
  }
}
