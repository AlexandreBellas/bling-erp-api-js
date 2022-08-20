// Global imports
import chance from 'chance'
import nullable from './helpers/nullable'
import stringifyDate from './helpers/stringifyDate'

// Template attributes
import cpfCnpj from './template/cpfCnpj'
import uf from './template/uf'

// Config
const seed = chance()
const dateToday = new Date()

// Generator
const generator = () => {
  const dataCriacaoDate = seed.date({
    min: new Date(dateToday.getFullYear() - 2, 0),
    max: new Date()
  })

  const dataCriacao = stringifyDate(dataCriacaoDate)

  const data = {
    data: nullable(dataCriacao),
    vendedor: seed.sentence({ words: 3 }),
    numero_rps: nullable(seed.string({ length: 6, symbols: false })),
    reter_inss: nullable(seed.pickone(['S', 'N'])),
    desconto: nullable(seed.floating({ fixed: 2, min: 0, max: 1000000 })),
    cliente: {
      nome: seed.sentence({ words: 3 }),
      cnpj: cpfCnpj('J'),
      ie: nullable(seed.integer({ min: 100000000000, max: 199999999999 }), 30),
      im: nullable(seed.integer({ min: 100000000000, max: 199999999999 }), 30),
      endereco: seed.street(),
      numero: seed.integer({ min: 1, max: 500 }),
      complemento: nullable(seed.sentence()),
      bairro: seed.province(),
      cep: seed.zip(),
      cidade: seed.city(),
      uf: uf(),
      fone: nullable(seed.string({ length: 8, alpha: false })),
      email: nullable(seed.email())
    }
  }

  // Serviços
  const numServicos = seed.integer({ min: 1, max: 4 })
  data.servicos = []

  for (let i = 0; i < numServicos; i++) {
    data.servicos.push({
      servico: {
        descricao: seed.sentence({ words: 5 }),
        valor: seed.floating({ fixed: 2, min: 0, max: 1000 }),
        codigo: seed.string({ length: 15, symbols: false })
      }
    })
  }

  // Parcelas
  if (seed.bool({ likelihood: 30 })) {
    const numParcelas = seed.integer({ min: 1, max: 4 })

    const dataParcelaDate = seed.date({
      min: new Date(dateToday.getFullYear() - 2, 0),
      max: new Date()
    })

    const dataParcela = stringifyDate(dataParcelaDate)

    const diasOrData = seed.bool()

    data.parcelas = []

    for (let i = 0; i < numParcelas; i++) {
      data.parcelas.push({
        parcela: {
          dias: nullable(diasOrData ? seed.integer({ min: 1, max: 30 }) : null),
          data: nullable(!diasOrData ? dataParcela : null),
          vlr: nullable(seed.floating({ fixed: 2, min: 0.1, max: 1000 })),
          obs: nullable(seed.sentence({ words: 10 })),
          forma: nullable(seed.sentence({ words: 2 }))
        }
      })
    }
  }

  return data
}

export default generator
