import { Chance } from 'chance'
import { Notificacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse from './create-response'
import getResponse from './get-response'

const chance = Chance()

describe('Notificações entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Notificacoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Notificacoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'notificacoes',
      params: {
        periodo: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should read successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotificacao = chance.word()
    repository.setResponse(createResponse)

    const response = await entity.read({ idNotificacao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `notificacoes/${idNotificacao}/confirmar-leitura`,
      body: {}
    })
    expect(response).toBe(createResponse)
  })
})
