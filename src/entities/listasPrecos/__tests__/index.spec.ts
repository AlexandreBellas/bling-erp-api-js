import { Chance } from 'chance'
import { ListasPrecos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'

const chance = Chance()

describe('ListasPrecos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ListasPrecos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ListasPrecos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)
    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'listas-precos',
      params: {
        pagina: undefined,
        limite: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idListaPreco = chance.natural()
    const response = await entity.find({ idListaPreco })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'listas-precos',
      id: String(idListaPreco)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })
})
