import chance from 'chance'

const seed = chance()

/**
 * Generates a random value for the "un" attribute among the default ones.
 *
 * One of the following values is generated:
 * - pc: peça
 * - un: unidade
 * - cx: caixa
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @returns {string} One of the default values.
 */
export default () => seed.pickone(['pc', 'un', 'cx'])
