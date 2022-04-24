export interface IBlingErrorArgs {
  name: string
  message: string
  status: string
  data?: unknown
  code: string
}

export interface IBlingError extends Error {
  name: string
  status: string
  code: string
  data?: unknown
  toJSON: () => {
    name: string
    message: string
    code: string
    data?: unknown
    stack?: string
  }
}

/**
 * Create an Error with the specified message, config, error code and status.
 *
 * @param {string} name The error name, default to 'BlingError'.
 * @param {string} message The error message.
 * @param {string} status The error status (for example, '500').
 * @param {unknown} data The error data (for example, the API call response).
 * @param {string} code The error code (for example, 'E_CONN_ABORTED').
 * @returns {IBlingError} The created error.
 */
export default function createError (args: IBlingErrorArgs) {
  const rawError = new Error(args.message)

  const error: IBlingError = {
    ...rawError,
    ...args,
    toJSON: () => {
      return {
        ...args,
        stack: rawError.stack
      }
    }
  }

  return error
}
