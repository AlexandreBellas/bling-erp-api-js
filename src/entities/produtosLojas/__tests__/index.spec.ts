import { Chance } from 'chance'
import { ProdutosLojas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Produtos - Lojas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosLojas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosLojas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idProdutoLoja = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idProdutoLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lojas',
      id: String(idProdutoLoja)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lojas',
      params: {
        limite: undefined,
        pagina: undefined,
        idProduto: undefined,
        idLoja: undefined,
        idCategoriaProduto: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idProdutoLoja = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idProdutoLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lojas',
      id: String(idProdutoLoja)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lojas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idProdutoLoja = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idProdutoLoja,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lojas',
      id: String(idProdutoLoja),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
