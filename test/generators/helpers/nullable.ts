import chance from 'chance'

const seed = chance()

/**
 * Return the desired value with a probability to be null given a likelihood.
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @param {T} value The value desired to be returned.
 * @param {number} likelihood The likelihood to return the value itself.
 *
 * @returns {T|null} The value itself or null.
 */
export default <T>(value: T, likelihood = 50): T | null => {
  return seed.bool({ likelihood }) ? value : null
}
