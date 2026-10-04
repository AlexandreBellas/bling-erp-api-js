import { Chance } from 'chance'
import { AnunciosCategorias } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'

const chance = Chance()

describe('AnunciosCategorias entity', () => {
  let repository: InMemoryBlingRepository
  let entity: AnunciosCategorias

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new AnunciosCategorias(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.get({ tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios/categorias',
      params: {
        tipoIntegracao,
        idLoja,
        idCategoria: undefined,
        tipoProduto: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idCategoria = chance.hash()
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.find({ idCategoria, tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios/categorias',
      id: String(idCategoria),
      params: {
        tipoIntegracao,
        idLoja
      }
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })
})
