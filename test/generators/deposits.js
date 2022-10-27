// Global imports
import chance from 'chance'
import nullable from './helpers/nullable'

// Config
const seed = chance()

// Generator
const generator = () => {
  const obj = {}

  obj.descricao = seed.sentence({ words: 5 })
  obj.desconsiderarSaldo = nullable(seed.bool({ likelihood: 20 }))
  obj.depositoPadrao = nullable(seed.bool({ likelihood: 5 }))
  obj.situacao = seed.pickone(['A', 'I'])

  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      delete obj[key]
    }
  })

  return obj
}

export default generator
