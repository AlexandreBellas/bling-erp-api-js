import { Chance } from 'chance'
import { FormasDePagamento } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Formas de pagamento entity', () => {
  let repository: InMemoryBlingRepository
  let entity: FormasDePagamento

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new FormasDePagamento(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idFormaPagamento = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idFormaPagamento })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      params: {
        limite: undefined,
        pagina: undefined,
        descricao: undefined,
        tiposPagamentos: undefined,
        situacao: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idFormaPagamento = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idFormaPagamento })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idFormaPagamento = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idFormaPagamento,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'formas-pagamentos',
      id: String(idFormaPagamento),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
