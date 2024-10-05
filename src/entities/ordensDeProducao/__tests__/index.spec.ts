import { Chance } from 'chance'
import { OrdensDeProducao } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import changeSituationResponse, {
  changeSituationRequest
} from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'
import generateOverDemandResponse from './generate-over-demand-response'
import { IGenerateOverDemandResponse } from '../interfaces/generate-over-demand.interface'

const chance = Chance()

describe('OrdensDeProducao entity', () => {
  let repository: InMemoryBlingRepository
  let entity: OrdensDeProducao

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new OrdensDeProducao(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idOrdemProducao = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idOrdemProducao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens-producao',
      id: String(idOrdemProducao)
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
      endpoint: 'ordens-producao',
      params: {
        limite: undefined,
        pagina: undefined,
        idsSituacoes: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idOrdemProducao = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idOrdemProducao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens-producao',
      id: String(idOrdemProducao)
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
      endpoint: 'ordens-producao',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should generate over demand successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(generateOverDemandResponse)

    const response = await entity.generateOverDemand()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens-producao/gerar-sob-demanda',
      body: {}
    })
    expect(response).toBe(generateOverDemandResponse)

    const typingResponseTest: IGenerateOverDemandResponse = generateOverDemandResponse
    expect(typingResponseTest).toBe(generateOverDemandResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idOrdemProducao = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idOrdemProducao,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens-producao',
      id: String(idOrdemProducao),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idOrdemProducao = chance.natural()
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idOrdemProducao,
      ...changeSituationRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'ordens-producao',
      id: `${idOrdemProducao}/situacoes`,
      body: changeSituationRequest
    })
    expect(response).toBe(changeSituationResponse)

    const typingResponseTest: null = changeSituationResponse
    expect(typingResponseTest).toBe(changeSituationResponse)
  })
})
