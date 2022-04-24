import { IPluralError, IPluralResponse, IApiError } from '../interfaces/method'

import packErrorsToJsonApi from './packErrorsToJsonApi'
import createError, { IBlingErrorArgs } from './createError'

export default <IEntityResponse>(args: {
  err: IApiError
  errorData: IBlingErrorArgs
  raw?: boolean
}) => {
  const rawData = args.err.response?.data as IPluralResponse<IEntityResponse>

  if (args.raw) {
    throw createError({
      ...args.errorData,
      data: rawData || null
    })
  } else {
    const rawErrorsArray = rawData.retorno as IPluralError
    const data = {
      errors: packErrorsToJsonApi(rawErrorsArray)
    }

    throw createError({
      ...args.errorData,
      data
    })
  }
}
