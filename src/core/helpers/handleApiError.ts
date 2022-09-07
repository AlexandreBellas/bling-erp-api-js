import { IPluralResponse, IPluralError } from '../interfaces/method'

import packErrorsToJsonApi from './packErrorsToJsonApi'
import createError, { IBlingErrorArgs } from './createError'

export default <IEntityResponse>(args: {
  rawData: IPluralResponse<IEntityResponse>
  errorData: IBlingErrorArgs
  raw?: boolean
}) => {
  const pluralError = args.rawData.retorno as IPluralError

  if (args.raw) {
    throw createError({
      ...args.errorData,
      data: args.rawData || null
    })
  } else {
    const jsonApiErrorArr = packErrorsToJsonApi(pluralError)

    throw createError({
      ...args.errorData,
      data: jsonApiErrorArr
    })
  }
}
