import createError, { IBlingErrorArgs } from './createError'
import packErrorsToJsonApi from './packErrorsToJsonApi'
import { IPluralResponse, IPluralError } from '../interfaces/method'

export default <IEntityResponse>(args: {
  rawData: IPluralResponse<IEntityResponse>
  errorData: IBlingErrorArgs
  raw?: boolean
}) => {
  const pluralError = args.rawData.retorno as IPluralError

  if (args.raw) {
    throw createError({
      ...args.errorData,
      data: args.rawData
    })
  } else {
    const jsonApiErrorArr = packErrorsToJsonApi(pluralError)

    throw createError({
      ...args.errorData,
      data: jsonApiErrorArr
    })
  }
}
