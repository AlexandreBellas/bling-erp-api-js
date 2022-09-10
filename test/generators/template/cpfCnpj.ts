const { CNPJ, CPF } = require('cpf_cnpj')

/**
 * Generates either a random CPF, or a random CNPJ, or just a random null value given a person type.
 *
 * @author Alexandre Batistella
 * @version 1.0.0
 * @since 4.0.0
 *
 * @param {string} tipoPessoa The person type in Bling standards, either being 'F', 'J', or 'E'.
 *
 * @returns {string|null} The generated CPF, or the generated CNPJ, or null.
 */
export default (tipoPessoa: 'J' | 'F' | unknown): string | null => {
  switch (tipoPessoa) {
    case 'J':
      return CNPJ.generate()
    case 'F':
      return CPF.generate()
    default:
      return null
  }
}
