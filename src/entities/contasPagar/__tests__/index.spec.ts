import { Chance } from 'chance'
import { ContasPagar } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import downloadResponse, { downloadRequestBody } from './download-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'
import type * as CreateTypes from '../interfaces/create.interface'
import type * as DownloadTypes from '../interfaces/download.interface'
import type * as FindTypes from '../interfaces/find.interface'
import type * as GetTypes from '../interfaces/get.interface'
import type * as UpdateTypes from '../interfaces/update.interface'

const chance = Chance()

describe('Contas a pagar entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ContasPagar

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ContasPagar(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idContaPagar = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idContaPagar })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/pagar',
      id: String(idContaPagar)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContaPagar = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idContaPagar })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/pagar',
      id: String(idContaPagar)
    })
    expect(response).toBe(findResponse)
  })

  it('should keep fixtures assignable to the declared types', () => {
    const typedCreateResponse: CreateTypes.ICreateResponse = createResponse
    const typedCreateBody: CreateTypes.ICreateBody = createRequestBody
    const typedDownloadResponse: DownloadTypes.IDownloadResponse =
      downloadResponse
    const typedDownloadBody: DownloadTypes.IDownloadBody = downloadRequestBody
    const typedFindResponse: FindTypes.IFindResponse = findResponse
    const typedGetResponse: GetTypes.IGetResponse = getResponse
    const typedUpdateResponse: UpdateTypes.IUpdateResponse = updateResponse
    const typedUpdateBody: UpdateTypes.IUpdateBody = updateRequestBody

    expect([
      typedCreateResponse,
      typedCreateBody,
      typedDownloadResponse,
      typedDownloadBody,
      typedFindResponse,
      typedGetResponse,
      typedUpdateResponse,
      typedUpdateBody
    ]).toHaveLength(8)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/pagar',
      params: {
        limite: undefined,
        pagina: undefined,
        dataEmissaoInicial: undefined,
        dataEmissaoFinal: undefined,
        dataVencimentoInicial: undefined,
        dataVencimentoFinal: undefined,
        dataPagamentoInicial: undefined,
        dataPagamentoFinal: undefined,
        situacao: undefined,
        idContato: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/pagar',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should download successfully', async () => {
    const idContaPagar = chance.natural()
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(downloadResponse)

    const response = await entity.download({
      idContaPagar,
      ...downloadRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `contas/pagar/${idContaPagar}/baixar`,
      body: downloadRequestBody
    })
    expect(response).toBe(downloadResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idContaPagar = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idContaPagar,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contas/pagar',
      id: String(idContaPagar),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
