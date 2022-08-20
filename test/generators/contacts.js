// Global imports
import chance from 'chance'
import nullable from './helpers/nullable'

// Template attributes
import uf from './template/uf'
import tipoPessoa from './template/tipoPessoa'
import cpfCnpj from './template/cpfCnpj'
import contribuinte from './template/contribuinte'

// Config
const seed = chance()

// Generator
const contact = () => {
  const tipoPessoaValue = tipoPessoa()
  const contribuinteVal = contribuinte()

  return {
    nome: seed.sentence({ words: 3 }),
    fantasia: nullable(seed.sentence({ words: 3 }), 30),
    tipoPessoa: tipoPessoaValue,
    contribuinte: contribuinteVal,
    cpf_cnpj: cpfCnpj(tipoPessoaValue),
    ie_rg:
      contribuinteVal === '2'
        ? 'ISENTO'
        : nullable(seed.integer({ min: 100000000000, max: 199999999999 }), 30),
    endereco: seed.street(),
    numero: nullable(seed.integer({ min: 1, max: 500 }), 30),
    complemento: seed.sentence(),
    bairro: seed.province(),
    cep: seed.zip(),
    cidade: nullable(seed.city(), 30),
    uf: nullable(uf()),
    fone: seed.string({ length: 8, alpha: false }),
    celular: nullable(seed.string({ length: 9, alpha: false }), 10),
    email: nullable(seed.email()),
    emailNfe: nullable(seed.email(), 15),
    site: nullable(seed.domain()),
    obs: nullable(seed.paragraph())
  }
}

export default contact
