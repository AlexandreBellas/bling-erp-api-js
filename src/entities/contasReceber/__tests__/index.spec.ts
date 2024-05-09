import { Chance } from 'chance'
import { ContasReceber } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import cancelBankSlipsResponse, {
  cancelBankSlipRequest
} from './cancel-bank-slips-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import downloadResponse, { downloadRequestBody } from './download-response'
import findResponse from './find-response'
import getBankSlipsResponse from './get-bank-slips-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'
import { IGetResponse } from '../interfaces/get.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetBankSlipsResponse } from '../interfaces/get-bank-slips.interface'
import { ICreateResponse } from '../interfaces/create.interface'
import { IDownloadResponse } from '../interfaces/download.interface'
import { IUpdateResponse } from '../interfaces/update.interface'

const chance = Chance()

describe('Contas a receber entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ContasReceber

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ContasReceber(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idContaReceber = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idContaReceber })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber',
      id: String(idContaReceber)
    })
    expect(response).toBe(deleteResponse)
    const typingResponseTest: null = deleteResponse
    expect(typingResponseTest).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber',
      params: {
        limite: undefined,
        pagina: undefined,
        situacoes: undefined,
        tipoFiltroData: undefined,
        dataInicial: undefined,
        dataFinal: undefined,
        idsCategorias: undefined,
        idPortador: undefined,
        idVendedor: undefined,
        idFormaPagamento: undefined
      }
    })
    expect(response).toBe(getResponse)
    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContaReceber = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idContaReceber })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber',
      id: String(idContaReceber)
    })
    expect(response).toBe(findResponse)
    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get bank slips successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    const idOrigem = chance.natural()
    repository.setResponse(getBankSlipsResponse)

    const response = await entity.getBankSlips({
      idOrigem
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber/view/bankslips',
      params: {
        idOrigem,
        situations: undefined
      }
    })
    expect(response).toBe(getBankSlipsResponse)
    const typingResponseTest: IGetBankSlipsResponse = getBankSlipsResponse
    expect(typingResponseTest).toBe(getBankSlipsResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should download successfully', async () => {
    const idContaReceber = chance.natural()
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(downloadResponse)

    const response = await entity.download({
      idContaReceber,
      ...downloadRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `contas/receber/${idContaReceber}/baixar`,
      body: downloadRequestBody
    })
    expect(response).toBe(downloadResponse)
    const typingResponseTest: IDownloadResponse = downloadResponse
    expect(typingResponseTest).toBe(downloadResponse)
  })

  it('should cancel bank slips successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(cancelBankSlipsResponse)

    const response = await entity.cancelBankSlips(cancelBankSlipRequest)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber/cancel/bankslips',
      body: cancelBankSlipRequest
    })
    expect(response).toBe(cancelBankSlipsResponse)
    const typingResponseTest: null = cancelBankSlipsResponse
    expect(typingResponseTest).toBe(cancelBankSlipsResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idContaReceber = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idContaReceber,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/receber',
      id: String(idContaReceber),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
