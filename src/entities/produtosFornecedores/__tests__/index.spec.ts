import { Chance } from 'chance'
import { ProdutosFornecedores } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Produtos - Fornecedores entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosFornecedores

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosFornecedores(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idProdutoFornecedor = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idProdutoFornecedor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/fornecedores',
      id: String(idProdutoFornecedor)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/fornecedores',
      params: {
        limite: undefined,
        pagina: undefined,
        idProduto: undefined,
        idFornecedor: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idProdutoFornecedor = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idProdutoFornecedor })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/fornecedores',
      id: String(idProdutoFornecedor)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/fornecedores',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idProdutoFornecedor = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idProdutoFornecedor,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/fornecedores',
      id: String(idProdutoFornecedor),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
