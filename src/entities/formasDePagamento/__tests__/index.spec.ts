import { Chance } from 'chance'
import { FormasDePagamento } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changeSituationResponse from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import setDefaultResponse from './set-default-response'
import updateResponse, { updateRequestBody } from './update-response'
import type * as CreateTypes from '../interfaces/create.interface'
import type * as FindTypes from '../interfaces/find.interface'
import type * as GetTypes from '../interfaces/get.interface'
import type * as UpdateTypes from '../interfaces/update.interface'

const chance = Chance()

describe('Formas de pagamento entity', () => {
  let repository: InMemoryBlingRepository
  let entity: FormasDePagamento

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new FormasDePagamento(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idFormaPagamento = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idFormaPagamento })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should keep fixtures assignable to the declared types', () => {
    const typedCreateResponse: CreateTypes.ICreateResponse = createResponse
    const typedCreateBody: CreateTypes.ICreateBody = createRequestBody
    const typedFindResponse: FindTypes.IFindResponse = findResponse
    const typedGetResponse: GetTypes.IGetResponse = getResponse
    const typedUpdateResponse: UpdateTypes.IUpdateResponse = updateResponse
    const typedUpdateBody: UpdateTypes.IUpdateBody = updateRequestBody

    expect([
      typedCreateResponse,
      typedCreateBody,
      typedFindResponse,
      typedGetResponse,
      typedUpdateResponse,
      typedUpdateBody
    ]).toHaveLength(6)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      params: {
        limite: undefined,
        pagina: undefined,
        descricao: undefined,
        tiposPagamentos: undefined,
        situacao: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idFormaPagamento = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idFormaPagamento })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idFormaPagamento = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idFormaPagamento,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })

  it('should change situation successfully', async () => {
    const idFormaPagamento = chance.natural()
    const body = { situacao: 1 as const }
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idFormaPagamento,
      ...body
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: `${idFormaPagamento}/situacao`,
      body
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should set default successfully', async () => {
    const idFormaPagamento = chance.natural()
    const body = { padrao: 1 as const }
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(setDefaultResponse)

    const response = await entity.setDefault({
      idFormaPagamento,
      ...body
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: `${idFormaPagamento}/padrao`,
      body
    })
    expect(response).toBe(setDefaultResponse)
  })
})
