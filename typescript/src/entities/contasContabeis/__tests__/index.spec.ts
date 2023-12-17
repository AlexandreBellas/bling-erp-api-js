import { Chance } from 'chance'
import { ContasContabeis } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import findResponse from './find-response'
import getResponse from './get-response'

const chance = Chance()

describe('Contas contábeis entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ContasContabeis

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ContasContabeis(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas-contabeis',
      params: {
        limite: undefined,
        pagina: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContaContabil = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idContaContabil })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas-contabeis',
      id: String(idContaContabil)
    })
    expect(response).toBe(findResponse)
  })
})
