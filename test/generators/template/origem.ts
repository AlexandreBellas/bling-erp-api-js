import chance from 'chance'

const seed = chance()

/**
 * Generates a random value for the "origem" attribute among the default ones.
 *
 * The default values are 0, 1, 2, 3, 4, 5, 6, 7, and 8.
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @returns {string} One of the default values.
 */
export default () => seed.pickone(['0', '1', '2', '3', '4', '5', '6', '7', '8'])
