import { Chance } from 'chance'
import { Nfces } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import { ISendResponse } from '../interfaces/send.interface'
import { IUpdateResponse } from '../interfaces/update.interface'
import createResponse, { createRequestBody } from './create-response'
import findResponse from './find-response'
import getResponse from './get-response'
import postAccountsResponse from './post-accounts-response'
import postStockResponse from './post-stock-response'
import postStockToDepositResponse from './post-stock-to-deposit-response'
import reverseAccountsResponse from './reverse-accounts-response'
import reverseStockResponse from './reverse-stock-response'
import sendResponse from './send-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('NFC-es entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Nfces

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Nfces(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfce',
      params: {
        limite: undefined,
        pagina: undefined,
        situacao: undefined,
        dataEmissaoInicial: undefined,
        dataEmissaoFinal: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfce',
      id: String(idNotaFiscalConsumidor)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfce',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should send successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(sendResponse)

    const response = await entity.send({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/enviar`,
      body: {}
    })
    expect(response).toBe(sendResponse)

    const typingResponseTest: ISendResponse = sendResponse
    expect(typingResponseTest).toBe(sendResponse)
  })

  it('should post accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(postAccountsResponse)

    const response = await entity.postAccounts({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/lancar-contas`,
      body: {}
    })
    expect(response).toBe(postAccountsResponse)

    const typingResponseTest: null = postAccountsResponse
    expect(typingResponseTest).toBe(postAccountsResponse)
  })

  it('should reverse accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(reverseAccountsResponse)

    const response = await entity.reverseAccounts({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/estornar-contas`,
      body: {}
    })
    expect(response).toBe(reverseAccountsResponse)

    const typingResponseTest: null = reverseAccountsResponse
    expect(typingResponseTest).toBe(reverseAccountsResponse)
  })

  it('should post stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(postStockResponse)

    const response = await entity.postStock({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/lancar-estoque`,
      body: {}
    })
    expect(response).toBe(postStockResponse)

    const typingResponseTest: null = postStockResponse
    expect(typingResponseTest).toBe(postStockResponse)
  })

  it('should post stock to deposit successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    const idDeposito = chance.natural()
    repository.setResponse(postStockToDepositResponse)

    const response = await entity.postStockToDeposit({
      idNotaFiscalConsumidor,
      idDeposito
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/lancar-estoque/${idDeposito}`,
      body: {}
    })
    expect(response).toBe(postStockToDepositResponse)

    const typingResponseTest: null = postStockToDepositResponse
    expect(typingResponseTest).toBe(postStockToDepositResponse)
  })

  it('should reverse stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(reverseStockResponse)

    const response = await entity.reverseStock({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/estornar-estoque`,
      body: {}
    })
    expect(response).toBe(reverseStockResponse)

    const typingResponseTest: null = reverseStockResponse
    expect(typingResponseTest).toBe(reverseStockResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idNotaFiscalConsumidor,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfce',
      id: String(idNotaFiscalConsumidor),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
