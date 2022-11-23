// Global imports
import chance from 'chance'

// Config
const seed = chance()

// Generator
const generator = (idCategoria, idVinculoLoja) => ({
  idCategoria,
  idVinculoLoja,
  descricaoVinculo: seed.sentence({ words: 5 })
})

export default generator
