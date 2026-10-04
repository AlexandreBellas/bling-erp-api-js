import { Chance } from 'chance'
import { Caixas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import deleteResponse from './delete-response'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'
import { ICreateResponse } from '../interfaces/create.interface'
import createResponse, { createRequestBody } from './create-response'
import { IUpdateResponse } from '../interfaces/update.interface'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Caixas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Caixas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Caixas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)
    const idCaixa = chance.natural()
    const response = await entity.delete({ idCaixa })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'caixas',
      id: String(idCaixa)
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
      endpoint: 'caixas',
      params: {
        pagina: undefined,
        dataInicial: undefined,
        dataFinal: undefined,
        idsCategorias: undefined,
        idContaFinanceira: undefined,
        pesquisa: undefined,
        valor: undefined,
        situacaoConciliacao: undefined,
        situacao: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idCaixa = chance.natural()
    const response = await entity.find({ idCaixa })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'caixas',
      id: String(idCaixa)
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
      endpoint: 'caixas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateResponse)
    const idCaixa = chance.natural()
    const response = await entity.update({ idCaixa, ...updateRequestBody })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'caixas',
      id: String(idCaixa),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
