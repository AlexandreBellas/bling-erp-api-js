import { Chance } from 'chance'
import { Estoques } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import findResponse from './find-balance-response'
import getResponse from './get-balances-response'
import updateResponse, { updateRequestBody } from './update-response'
import { IFindBalanceResponse } from '../interfaces/find-balance.interface'
import { IGetBalancesResponse } from '../interfaces/get-balances.interface'
import { ICreateResponse } from '../interfaces/create.interface'

const chance = Chance()

describe('Estoques entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Estoques

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Estoques(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should find balance successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idDeposito = chance.natural()
    const idsProdutos: number[] = []
    for (let i = 0; i < chance.natural({ min: 2, max: 5 }); i++) {
      idsProdutos.push(chance.natural())
    }
    repository.setResponse(findResponse)

    const response = await entity.findBalance({ idDeposito, idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'estoques/saldos',
      id: String(idDeposito),
      params: { idsProdutos }
    })
    expect(response).toBe(findResponse)
    const typingResponseTest: IFindBalanceResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get balances successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    const idsProdutos: number[] = []
    for (let i = 0; i < chance.natural({ min: 2, max: 5 }); i++) {
      idsProdutos.push(chance.natural())
    }
    repository.setResponse(getResponse)

    const response = await entity.getBalances({ idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'estoques/saldos',
      params: { idsProdutos }
    })
    expect(response).toBe(getResponse)
    const typingResponseTest: IGetBalancesResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'estoques',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idEstoque = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idEstoque,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'estoques',
      id: String(idEstoque),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
