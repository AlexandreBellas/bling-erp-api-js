import { Chance } from 'chance'
import { Notificacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse from './create-response'
import getQuantityResponse from './get-quantity-response'
import getResponse from './get-response'
import type * as CreateTypes from '../interfaces/create.interface'
import type * as GetTypes from '../interfaces/get.interface'

const chance = Chance()

describe('Notificações entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Notificacoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Notificacoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should keep fixtures assignable to the declared types', () => {
    const typedCreateResponse: CreateTypes.ICreateResponse = createResponse
    const typedGetResponse: GetTypes.IGetResponse = getResponse

    expect([typedCreateResponse, typedGetResponse]).toHaveLength(2)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'notificacoes',
      params: {
        periodo: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should get filtered by period successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    const periodo = '2023'
    repository.setResponse(getResponse)

    const response = await entity.get({ periodo })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'notificacoes',
      params: { periodo }
    })
    expect(response).toBe(getResponse)
  })

  it('should get quantity successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getQuantityResponse)

    const response = await entity.getQuantity()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'notificacoes/quantidade',
      params: {
        periodo: undefined
      }
    })
    expect(response).toBe(getQuantityResponse)
  })

  it('should get quantity filtered by period successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    const periodo = '2023-01'
    repository.setResponse(getQuantityResponse)

    const response = await entity.getQuantity({ periodo })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'notificacoes/quantidade',
      params: { periodo }
    })
    expect(response).toBe(getQuantityResponse)
  })

  it('should read successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotificacao = chance.word()
    repository.setResponse(createResponse)

    const response = await entity.read({ idNotificacao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `notificacoes/${idNotificacao}/confirmar-leitura`,
      body: {}
    })
    expect(response).toBe(createResponse)
  })
})
