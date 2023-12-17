import { Chance } from 'chance'
import { LogisticasRemessas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetByLogisticResponse } from '../interfaces/get-by-logistic.interface'
import { IUpdateResponse } from '../interfaces/update.interface'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getByLogisticResponse from './get-by-logistic-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Logísticas - Remessas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: LogisticasRemessas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new LogisticasRemessas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idRemessa = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idRemessa })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/remessas',
      id: String(idRemessa)
    })
    expect(response).toBe(deleteResponse)

    const typingResponseTest: null = deleteResponse
    expect(typingResponseTest).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idRemessa = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idRemessa })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/remessas',
      id: String(idRemessa)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get by logistic successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idLogistica = chance.natural()
    repository.setResponse(getByLogisticResponse)

    const response = await entity.getByLogistic({ idLogistica })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      id: `${idLogistica}/remessas`
    })
    expect(response).toBe(getByLogisticResponse)

    const typingResponseTest: IGetByLogisticResponse = getByLogisticResponse
    expect(typingResponseTest).toBe(getByLogisticResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/remessas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idRemessa = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idRemessa,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/remessas',
      id: String(idRemessa),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
