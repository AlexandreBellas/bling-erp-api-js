import { Chance } from 'chance'
import { Contratos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Contratos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Contratos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Contratos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idContrato = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idContrato })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contratos',
      id: String(idContrato)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contratos',
      params: {
        limite: undefined,
        pagina: undefined,
        dataCriacaoInicio: undefined,
        dataCriacaoFinal: undefined,
        dataBaseInicio: undefined,
        dataBaseFinal: undefined,
        situacao: undefined,
        idContato: undefined,
        idContatoCobranca: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContrato = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idContrato })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contratos',
      id: String(idContrato)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contratos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idContrato = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idContrato,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contratos',
      id: String(idContrato),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
