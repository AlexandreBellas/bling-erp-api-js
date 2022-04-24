import {
  IPluralError,
  ISingularError,
  IShortenedError
} from '../interfaces/method'

/**
 * Convert Bling array/object/string errors to JSON API standards. Useful for standardizing the error response.
 *
 * ######## JSON API SPECIFICATION ########
 *
 * Source: https://jsonapi.org/format/#errors
 *
 * ========================================
 *
 * An error object MAY have the following members:
 *  - `id`: a unique identifier for this particular occurrence of the problem.
 *  - `links`: a links object containing the following members:
 *    - `about`: a link that leads to further details about this particular occurrence of the problem.
 *  - `status`: the HTTP status code applicable to this problem, expressed as a string value.
 *  - `code`: an application-specific error code, expressed as a string value.
 *  - `title`: a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
 *  - `detail`: a human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.
 *  - `source`: an object containing references to the source of the error, optionally including any of the following members:
 *    - `pointer`: a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. `"/data"` for a primary data object, or `"/data/attributes/title"` for a specific attribute].
 *    - `parameter`: a string indicating which URI query parameter caused the error.
 *  - `meta`: a meta object containing non-standard meta-information about the error.
 */

export interface JsonApiErrorObject {
  id?: string
  links?: {
    about?: string
  }
  status?: string
  code: string
  title?: string
  detail: string
  source?: {
    pointer?: string
    parameter?: string
  }
  meta?: unknown
}

export default (errArr: IPluralError) => {
  const rawErrors = errArr.erros

  const returnData: { errors: JsonApiErrorObject[] } = {
    errors: []
  }

  if (Array.isArray(rawErrors)) {
    if (typeof rawErrors[0] === 'string') {
      const definedRawErrData = rawErrors as string[]

      returnData.errors = definedRawErrData.map((err: string) => ({
        detail: err,
        code: '_'
      }))
    } else {
      const definedRawErrData = rawErrors as ISingularError[]

      returnData.errors = definedRawErrData.map((errObj: ISingularError) => ({
        detail: errObj.erro.msg,
        code: String(errObj.erro.cod)
      }))
    }
  } else {
    if (rawErrors.erro) {
      const errors = rawErrors as ISingularError

      returnData.errors = [
        {
          detail: errors.erro.msg,
          code: String(errors.erro.cod)
        }
      ]
    } else {
      const errors = rawErrors as IShortenedError

      returnData.errors = Object.keys(errors).map((errCode) => ({
        detail: errors[errCode],
        code: String(errCode)
      }))
    }
  }

  return returnData
}
