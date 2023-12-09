import { Chance } from 'chance'
import { CategoriasReceitasDespesas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import findResponse from './find-response'
import getResponse from './get-response'
const chance = Chance()

describe('Categorias - Receitas e Despesas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CategoriasReceitasDespesas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CategoriasReceitasDespesas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCategoria = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCategoria })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      id: String(idCategoria)
    })
    expect(response).toBe(findResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      params: {
        limite: undefined,
        pagina: undefined,
        situacao: undefined,
        tipo: undefined
      }
    })
    expect(response).toBe(getResponse)
  })
})
