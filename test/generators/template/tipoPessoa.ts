import chance from 'chance'

const seed = chance()

/**
 * Generates a random value for the "tipoPessoa" attribute among the default ones.
 *
 * The default values are
 * - F: pessoa física
 * - J: pessoa jurídica
 * - E: estrangeiro
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @returns {string} One of the default values.
 */
export default () => seed.pickone(['F', 'J', 'E'])
