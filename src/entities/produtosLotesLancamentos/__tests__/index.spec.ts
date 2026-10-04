import { Chance } from 'chance'
import { ProdutosLotesLancamentos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'
import { IGetBalanceResponse } from '../interfaces/get-balance.interface'
import getBalanceResponse from './get-balance-response'
import { IGetBalancesResponse } from '../interfaces/get-balances.interface'
import getBalancesResponse from './get-balances-response'
import { IGetBalanceSumResponse } from '../interfaces/get-balance-sum.interface'
import getBalanceSumResponse from './get-balance-sum-response'
import { IGetTotalBalanceResponse } from '../interfaces/get-total-balance.interface'
import getTotalBalanceResponse from './get-total-balance-response'
import { ICreateResponse } from '../interfaces/create.interface'
import createResponse, { createRequestBody } from './create-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('ProdutosLotesLancamentos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosLotesLancamentos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosLotesLancamentos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(getResponse)
    const idLote = chance.natural()
    const response = await entity.get({ idLote })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: `${idLote}/lancamentos`
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idLancamento = chance.natural()
    const response = await entity.find({ idLancamento })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes/lancamentos',
      id: String(idLancamento)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get balance successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(getBalanceResponse)
    const idProduto = chance.natural()
    const idLote = chance.natural()
    const idDeposito = chance.natural()
    const response = await entity.getBalance({ idProduto, idLote, idDeposito })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: `${idProduto}/lotes/${idLote}/depositos/${idDeposito}/saldo`
    })
    expect(response).toBe(getBalanceResponse)

    const typingResponseTest: IGetBalanceResponse = getBalanceResponse
    expect(typingResponseTest).toBe(getBalanceResponse)
  })

  it('should get balances successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(getBalancesResponse)
    const idProduto = chance.natural()
    const idDeposito = chance.natural()
    const idsLotes = [chance.natural(), chance.natural()]
    const response = await entity.getBalances({
      idProduto,
      idDeposito,
      idsLotes
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: `${idProduto}/lotes/depositos/${idDeposito}/saldo`,
      params: {
        idsLotes
      }
    })
    expect(response).toBe(getBalancesResponse)

    const typingResponseTest: IGetBalancesResponse = getBalancesResponse
    expect(typingResponseTest).toBe(getBalancesResponse)
  })

  it('should get balance sum successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(getBalanceSumResponse)
    const idProduto = chance.natural()
    const idDeposito = chance.natural()
    const response = await entity.getBalanceSum({ idProduto, idDeposito })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: `${idProduto}/lotes/depositos/${idDeposito}/saldo/soma`
    })
    expect(response).toBe(getBalanceSumResponse)

    const typingResponseTest: IGetBalanceSumResponse = getBalanceSumResponse
    expect(typingResponseTest).toBe(getBalanceSumResponse)
  })

  it('should get total balance successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(getTotalBalanceResponse)
    const idProduto = chance.natural()
    const response = await entity.getTotalBalance({ idProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: `${idProduto}/lotes/saldo/soma`
    })
    expect(response).toBe(getTotalBalanceResponse)

    const typingResponseTest: IGetTotalBalanceResponse = getTotalBalanceResponse
    expect(typingResponseTest).toBe(getTotalBalanceResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)
    const idLote = chance.natural()
    const response = await entity.create({ idLote, ...createRequestBody })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `produtos/lotes/${idLote}/lancamentos`,
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(updateResponse)
    const idLancamento = chance.natural()
    const response = await entity.update({ idLancamento, ...updateRequestBody })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes/lancamentos',
      id: String(idLancamento),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
