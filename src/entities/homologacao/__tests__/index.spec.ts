import { Chance } from 'chance'
import { Homologacao } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changeSituationResponse, {
  changeSituationRequest
} from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Homologação entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Homologacao

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Homologacao(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idProdutoHomologacao = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)
    const hash = chance.word()

    const response = await entity.delete({
      idProdutoHomologacao,
      hash
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'homologacao/produtos',
      id: String(idProdutoHomologacao),
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'homologacao/produtos',
      shouldIncludeHeadersInResponse: true
    })
    expect(response).toBe(getResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idProdutoHomologacao = chance.natural()
    repository.setResponse(changeSituationResponse)
    const hash = chance.word()

    const response = await entity.changeSituation({
      idProdutoHomologacao,
      hash,
      ...changeSituationRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'homologacao/produtos',
      id: String(idProdutoHomologacao),
      body: changeSituationRequest,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)
    const hash = chance.word()

    const response = await entity.create({
      hash,
      ...createRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'homologacao/produtos',
      body: createRequestBody,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idProdutoHomologacao = chance.natural()
    repository.setResponse(updateResponse)
    const hash = chance.word()

    const response = await entity.update({
      idProdutoHomologacao,
      hash,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'homologacao/produtos',
      id: String(idProdutoHomologacao),
      body: updateRequestBody,
      headers: {
        'x-bling-homologacao': hash
      },
      shouldIncludeHeadersInResponse: true
    })
    expect(response).toBe(updateResponse)
  })
})
