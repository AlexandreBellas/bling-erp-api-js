import chance from 'chance'

const seed = chance()

const nullable = (value: unknown, likelihood = 50) => {
  return seed.bool({ likelihood }) ? value : null
}

const contact = () => ({
  nome: seed.sentence({ words: 3 }),
  fantasia: nullable(seed.sentence({ words: 3 }), 30),
  tipoPessoa: seed.pickone(['F', 'J', 'E']),
  contribuinte: seed.pickone(['1', '2', '9']),
  cpf_cnpj: seed.cpf(),
  ie_rg: nullable(seed.integer({ min: 100000000000, max: 199999999999 }), 30),
  endereco: seed.street(),
  numero: nullable(seed.integer({ min: 1, max: 500 }), 30),
  complemento: seed.sentence(),
  bairro: seed.province(),
  cep: seed.zip(),
  cidade: nullable(seed.city(), 30),
  uf: nullable(
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
  ),
  fone: seed.string({ length: 8, alpha: false }),
  celular: nullable(seed.string({ length: 9, alpha: false }), 10),
  email: nullable(seed.email()),
  emailNfe: nullable(seed.email(), 15),
  site: nullable(seed.domain()),
  obs: nullable(seed.paragraph())
})

export default contact
