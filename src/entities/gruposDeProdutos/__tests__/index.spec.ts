import { Chance } from 'chance'
import { GruposDeProdutos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IDeleteManyResponse } from '../interfaces/delete-many.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import createResponse, { createRequestBody } from './create-response'
import deleteManyResponse from './delete-many-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('GruposDeProdutos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: GruposDeProdutos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new GruposDeProdutos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const idsGruposProdutos: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsGruposProdutos.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)

    const response = await entity.deleteMany({ idsGruposProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'grupos-produtos',
      id: '',
      params: { idsGruposProdutos }
    })
    expect(response).toBe(deleteManyResponse)

    const typingResponseTest: IDeleteManyResponse = deleteManyResponse
    expect(typingResponseTest).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idGrupoProduto = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idGrupoProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'grupos-produtos',
      id: String(idGrupoProduto)
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
      endpoint: 'grupos-produtos',
      params: {
        nome: undefined,
        nomePai: undefined,
        pagina: undefined,
        limite: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idGrupoProduto = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idGrupoProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'grupos-produtos',
      id: String(idGrupoProduto)
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
      endpoint: 'grupos-produtos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idGrupoProduto = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idGrupoProduto,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'grupos-produtos',
      id: String(idGrupoProduto),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
