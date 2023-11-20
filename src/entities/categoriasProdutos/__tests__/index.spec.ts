import { Chance } from 'chance'
import { CategoriasProdutos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Categorias - Produtos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CategoriasProdutos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CategoriasProdutos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idCategoriaProduto = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idCategoriaProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/produtos',
      id: String(idCategoriaProduto)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCategoriaProduto = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCategoriaProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/produtos',
      id: String(idCategoriaProduto)
    })
    expect(response).toBe(findResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCategoriaProduto = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCategoriaProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/produtos',
      id: String(idCategoriaProduto)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/produtos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idCategoriaProduto = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idCategoriaProduto,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/produtos',
      id: String(idCategoriaProduto),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
