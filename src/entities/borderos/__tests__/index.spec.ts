import { Chance } from 'chance'
import { Borderos } from '../'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import deleteResponse from './delete-response'
import findResponse from './find-response'

const chance = Chance()

describe('Borderôs entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Borderos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Borderos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete borderô successfully', async () => {
    const idBordero = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idBordero })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'borderos',
      id: String(idBordero)
    })
    expect(response).toBeNull()
  })

  it('should find borderô successfully', async () => {
    const idBordero = chance.natural()
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)

    const response = await entity.find({ idBordero })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'borderos',
      id: String(idBordero)
    })
    expect(response).toBe(findResponse)
  })
})
