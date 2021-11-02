export interface IBlingError extends Error {
  status: number
  data: any
  code: string
  toJSON: () => {
    message: string
    name: string
    stack?: string
    data: any
    code: string
  }
}

/**
 * Create an Error with the specified message, config, error code and status.
 *
 * @param message The error message.
 * @param status The error status.
 * @param data The error data.
 * @param [code] The error code (for example, 'E_CONN_ABORTED').
 * @returns The created error.
 */
export default function createError (
  message: string,
  status: number,
  data: any,
  code: string
) {
  const rawError = new Error(message)

  const error: IBlingError = {
    ...rawError,
    message,
    status,
    data,
    code,
    toJSON: () => {
      return {
        message,
        name: rawError.name,
        stack: rawError.stack,
        data,
        code
      }
    }
  }

  return error
}
