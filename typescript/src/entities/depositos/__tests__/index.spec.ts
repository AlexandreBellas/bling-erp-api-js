import { Chance } from 'chance'
import { Depositos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Depósitos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Depositos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Depositos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'depositos',
      params: {
        limite: undefined,
        pagina: undefined,
        descricao: undefined,
        situacao: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idDeposito = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idDeposito })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'depositos',
      id: String(idDeposito)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'depositos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idDeposito = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idDeposito,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'depositos',
      id: String(idDeposito),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
