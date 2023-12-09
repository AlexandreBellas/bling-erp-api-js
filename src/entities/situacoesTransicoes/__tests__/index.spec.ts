import { Chance } from 'chance'
import { SituacoesTransicoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Situações - Transições entity', () => {
  let repository: InMemoryBlingRepository
  let entity: SituacoesTransicoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new SituacoesTransicoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idTransicao = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idTransicao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/transicoes',
      id: String(idTransicao)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idTransicao = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idTransicao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/transicoes',
      id: String(idTransicao)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/transicoes',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idTransicao = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idTransicao,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/transicoes',
      id: String(idTransicao),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
