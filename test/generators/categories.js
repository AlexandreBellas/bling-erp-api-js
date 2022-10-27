// Global imports
import chance from 'chance'
// import nullable from './helpers/nullable'

// Config
const seed = chance()

// Generator
const generator = () => ({
  descricao: seed.sentence()
  // idCategoriaPai: nullable(seed.integer({ min: 0, max: 10 }), 10)
})

export default generator
