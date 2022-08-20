const { CNPJ, CPF } = require('cpf_cnpj')

export default (tipoPessoa: 'J' | 'F' | unknown) => {
  switch (tipoPessoa) {
    case 'J':
      return CNPJ.generate()
    case 'F':
      return CPF.generate()
    default:
      return null
  }
}
