import { Chance } from 'chance'
import { CategoriasReceitasDespesas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteManyResponse from './delete-many-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'
const chance = Chance()

describe('Categorias - Receitas e Despesas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CategoriasReceitasDespesas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CategoriasReceitasDespesas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const idsCategorias = [chance.natural(), chance.natural()]
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)

    const response = await entity.deleteMany({ idsCategorias })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      id: '',
      params: { idsCategorias }
    })
    expect(response).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idCategoria = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idCategoria })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      id: String(idCategoria)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCategoria = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCategoria })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      id: String(idCategoria)
    })
    expect(response).toBe(findResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      params: {
        limite: undefined,
        pagina: undefined,
        situacao: undefined,
        tipo: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const idCategoria = chance.natural()
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idCategoria,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'categorias/receitas-despesas',
      id: String(idCategoria),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
