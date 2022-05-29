import { CPF, CNPJ } from 'cpf_cnpj'

export default (tipoPessoa) => {
  switch (tipoPessoa) {
    case 'J':
      return CNPJ.generate()
    case 'F':
      return CPF.generate()
    default:
      return null
  }
}
