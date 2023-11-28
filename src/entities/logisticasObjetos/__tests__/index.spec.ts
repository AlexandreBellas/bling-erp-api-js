import { Chance } from 'chance'
import { LogisticasObjetos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Logísticas - objetos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: LogisticasObjetos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new LogisticasObjetos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idObjeto = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idObjeto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/objetos',
      id: String(idObjeto)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idObjeto = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idObjeto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/objetos',
      id: String(idObjeto)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/objetos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idObjeto = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idObjeto,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/objetos',
      id: String(idObjeto),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
