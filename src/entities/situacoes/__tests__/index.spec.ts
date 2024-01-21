import { Chance } from 'chance'
import { Situacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Situacoes entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Situacoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Situacoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idSituacao = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idSituacao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes',
      id: String(idSituacao)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idSituacao = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idSituacao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes',
      id: String(idSituacao)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idSituacao = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idSituacao,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes',
      id: String(idSituacao),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
