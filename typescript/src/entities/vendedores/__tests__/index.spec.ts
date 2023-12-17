import { Chance } from 'chance'
import { Vendedores } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import findResponse from './find-response'
import getResponse from './get-response'

const chance = Chance()

describe('Vendedores entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Vendedores

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Vendedores(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'vendedores',
      params: {
        limite: undefined,
        pagina: undefined,
        nomeContato: undefined,
        situacaoContato: undefined,
        idContato: undefined,
        idLoja: undefined,
        dataAlteracaoInicial: undefined,
        dataAlteracaoFinal: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idVendedor = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idVendedor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'vendedores',
      id: String(idVendedor)
    })
    expect(response).toBe(findResponse)
  })
})
