import { Chance } from 'chance'
import { Logisticas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'
import type * as CreateTypes from '../interfaces/create.interface'
import type * as FindTypes from '../interfaces/find.interface'
import type * as GetTypes from '../interfaces/get.interface'
import type * as UpdateTypes from '../interfaces/update.interface'

const chance = Chance()

describe('Logísticas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Logisticas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Logisticas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idLogistica = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idLogistica })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      id: String(idLogistica)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should forward integration filters on get', async () => {
    const spy = jest.spyOn(repository, 'index')
    const params = {
      tipoIntegracao: 'LogisticaAliExpress' as const,
      tiposIntegracoes: [chance.word(), chance.word()],
      logisticasReversas: chance.bool()
    }

    await entity.get(params)

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        endpoint: 'logisticas',
        params: expect.objectContaining(params)
      })
    )
  })

  it('should forward listarServicosInativos on find', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idLogistica = chance.natural()
    const params = {
      listarServicosInativos: chance.bool()
    }

    await entity.find({ idLogistica, ...params })

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        endpoint: 'logisticas',
        params: expect.objectContaining(params)
      })
    )
  })

  it('should keep fixtures assignable to the declared types', () => {
    const typedCreateResponse: CreateTypes.ICreateResponse = createResponse
    const typedCreateBody: CreateTypes.ICreateBody = createRequestBody
    const typedFindResponse: FindTypes.IFindResponse = findResponse
    const typedGetResponse: GetTypes.IGetResponse = getResponse
    const typedUpdateBody: UpdateTypes.IUpdateBody = updateRequestBody

    expect([
      typedCreateResponse,
      typedCreateBody,
      typedFindResponse,
      typedGetResponse,
      typedUpdateBody
    ]).toHaveLength(5)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      params: {
        limite: undefined,
        pagina: undefined,
        tipoIntegracao: undefined,
        tiposIntegracoes: undefined,
        situacao: undefined,
        logisticasReversas: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idLogistica = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idLogistica })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      id: String(idLogistica),
      params: {
        listarServicosInativos: undefined
      }
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idLogistica = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idLogistica,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      id: String(idLogistica),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
