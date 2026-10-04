import { Chance } from 'chance'
import { DocumentosCompartilhados } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'

const chance = Chance()

describe('DocumentosCompartilhados entity', () => {
  let repository: InMemoryBlingRepository
  let entity: DocumentosCompartilhados

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new DocumentosCompartilhados(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const token = chance.hash()
    const response = await entity.find({ token })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'documentos-compartilhados',
      id: String(token),
      shouldIncludeHeadersInResponse: true,
      preserveRedirect: true
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })
})
