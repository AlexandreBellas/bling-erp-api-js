import { Chance } from 'chance'
import { CategoriasLojas } from '../'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Categorias - Lojas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CategoriasLojas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CategoriasLojas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idCategoriaLoja = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idCategoriaLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/lojas',
      id: String(idCategoriaLoja)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCategoriaLoja = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCategoriaLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/lojas',
      id: String(idCategoriaLoja)
    })
    expect(response).toBe(findResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/lojas',
      params: {
        idCategoriaProduto: undefined,
        idCategoriaProdutoPai: undefined,
        idLoja: undefined,
        limite: undefined,
        pagina: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/lojas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idCategoriaLoja = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idCategoriaLoja,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/lojas',
      id: String(idCategoriaLoja),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
