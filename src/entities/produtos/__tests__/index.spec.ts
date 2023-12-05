import { Produtos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'

import getResponse from './get-response'

describe('Produtos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Produtos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Produtos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      params: {
        pagina: undefined,
        limite: undefined,
        criterio: undefined,
        tipo: undefined,
        idComponente: undefined,
        dataInclusaoInicial: undefined,
        dataInclusaoFinal: undefined,
        dataAlteracaoInicial: undefined,
        dataAlteracaoFinal: undefined,
        idCategoria: undefined,
        idLoja: undefined,
        codigo: undefined,
        nome: undefined,
        idsProdutos: undefined,
      }
    })
    expect(response).toBe(getResponse)
  })
})
