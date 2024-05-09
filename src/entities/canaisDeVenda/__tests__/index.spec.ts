import { Chance } from 'chance'
import { CanaisDeVenda } from '../'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import findResponse from './find-response'
import getResponse from './get-response'
import getTypesResponse from './get-types-response'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import { IGetTypesResponse } from '../interfaces/get-types.interface'

const chance = Chance()

describe('Canais de Venda entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CanaisDeVenda

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CanaisDeVenda(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'canais-venda',
      params: {
        pagina: undefined,
        limite: undefined,
        tipos: undefined,
        situacao: undefined,
        agrupador: undefined
      }
    })
    expect(response).toBe(getResponse)
    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCanalVenda = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCanalVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'canais-venda',
      id: String(idCanalVenda)
    })
    expect(response).toBe(findResponse)
    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get types successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getTypesResponse)

    const response = await entity.getTypes()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'canais-venda/tipos',
      params: {
        agrupador: undefined
      }
    })
    expect(response).toBe(getTypesResponse)
    const typingResponseTest: IGetTypesResponse = getTypesResponse
    expect(typingResponseTest).toBe(getTypesResponse)
  })
})
