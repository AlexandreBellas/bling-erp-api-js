import { Chance } from 'chance'
import { OrdensServico } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import deleteResponse from './delete-response'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'
import { ICreateResponse } from '../interfaces/create.interface'
import createResponse, { createRequestBody } from './create-response'
import updateResponse, { updateRequestBody } from './update-response'
import changeSituationResponse from './change-situation-response'

const chance = Chance()

describe('OrdensServico entity', () => {
  let repository: InMemoryBlingRepository
  let entity: OrdensServico

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new OrdensServico(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)
    const idOrdemServico = chance.natural()
    const response = await entity.delete({ idOrdemServico })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens/servico',
      id: String(idOrdemServico)
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
      endpoint: 'ordens/servico',
      params: {
        pagina: undefined,
        limite: undefined,
        idsSituacoes: undefined,
        dataInicial: undefined,
        dataFinal: undefined,
        dataPrevistaInicial: undefined,
        dataPrevistaFinal: undefined,
        dataConclusaoInicial: undefined,
        dataConclusaoFinal: undefined,
        dataSaidaInicial: undefined,
        dataSaidaFinal: undefined,
        dataGarantiaInicial: undefined,
        dataGarantiaFinal: undefined,
        idContato: undefined,
        idVendedor: undefined,
        numero: undefined,
        numeroSerie: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idOrdemServico = chance.natural()
    const response = await entity.find({ idOrdemServico })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens/servico',
      id: String(idOrdemServico)
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
      endpoint: 'ordens/servico',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateResponse)
    const idOrdemServico = chance.natural()
    const response = await entity.update({
      idOrdemServico,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens/servico',
      id: String(idOrdemServico),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(changeSituationResponse)
    const idOrdemServico = chance.natural()
    const idSituacao = chance.natural()
    const response = await entity.changeSituation({
      idOrdemServico,
      idSituacao
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens/servico',
      id: `${idOrdemServico}/situacoes/${idSituacao}`,
      body: {}
    })
    expect(response).toBe(changeSituationResponse)

    const typingResponseTest: null = changeSituationResponse
    expect(typingResponseTest).toBe(changeSituationResponse)
  })
})
