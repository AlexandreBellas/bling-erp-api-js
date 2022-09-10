// Global imports
import chance from 'chance'
import nullable from './helpers/nullable'

// Config
const seed = chance()

// Generator
const generator = () => ({
  descricao: nullable(seed.sentence({ words: 5 })),
  desconsiderarSaldo: nullable(seed.bool({ likelihood: 20 })),
  depositoPadrao: nullable(seed.bool({ likelihood: 5 })),
  situacao: nullable(seed.pickone(['A', 'I']))
})

export default generator
