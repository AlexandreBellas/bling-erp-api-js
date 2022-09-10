import chance from 'chance'

const seed = chance()

/**
 * Generates a random Brazilian UF value.
 *
 * One of the following values is generated:
 * AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ,
 * RN, RS, RO, RR, SC, SP, SE, TO.
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @returns {string} A Brazilian UF.
 */
export default () =>
  seed.pickone([
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ])
