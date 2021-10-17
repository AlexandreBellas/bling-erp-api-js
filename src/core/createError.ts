export interface IBlingError extends Error {
  status: number
  config: any
  code: string
  toJSON: () => {
    message: string
    name: string
    stack?: string
    config: any
    code: string
  }
}

/**
 * Create an Error with the specified message, config, error code and status.
 *
 * @param {string} message The error message.
 * @param {number} status The error status.
 * @param {Bling} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @returns {IBlingError} The created error.
 */
export default function createError (
  message: string,
  status: number,
  config: any,
  code: string
) {
  const rawError = new Error(message)

  const error: IBlingError = {
    ...rawError,
    message,
    status,
    config,
    code,
    toJSON: () => {
      return {
        message,
        name: rawError.name,
        stack: rawError.stack,
        config,
        code
      }
    }
  }

  return error
}
