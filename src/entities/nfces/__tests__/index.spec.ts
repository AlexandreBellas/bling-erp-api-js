import { Chance } from 'chance'
import { Nfces } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import findResponse from './find-response'
import getResponse from './get-response'
import postAccountResponse from './post-account-response'
import reverseResponse from './reverse-response'
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
  })

  it('should post account successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(postAccountResponse)

    const response = await entity.postAccount({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/lancar-contas`,
      body: {}
    })
    expect(response).toBe(postAccountResponse)
  })

  it('should reverse successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscalConsumidor = chance.natural()
    repository.setResponse(reverseResponse)

    const response = await entity.reverse({ idNotaFiscalConsumidor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfce/${idNotaFiscalConsumidor}/estornar-contas`,
      body: {}
    })
    expect(response).toBe(reverseResponse)
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
  })
})
