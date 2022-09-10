import chance from 'chance'

const seed = chance()

/**
 * Generates a random value for the attribute "contribuinte" among the default ones.
 *
 * The default values are the following:
 * - 1: Contribuinte do ICMS
 * - 2: Contribuinte isento do ICMS
 * - 9: Não contribuinte
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @returns {string} One of the default values.
 */
export default () => seed.pickone(['1', '2', '9'])
