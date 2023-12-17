import { Chance } from 'chance'
import { LogisticasEtiquetas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IFormato } from '../types/formato.type'
import getResponse from './get-response'

const chance = Chance()

describe('Logísticas - Etiquetas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: LogisticasEtiquetas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new LogisticasEtiquetas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)
    const formato = chance.pickone(['PDF', 'ZPL']) as IFormato
    const idsVendas: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }) + 1; i++) {
      idsVendas.push(chance.natural())
    }

    const response = await entity.get({ formato, idsVendas })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/etiquetas',
      params: { formato, idsVendas }
    })
    expect(response).toBe(getResponse)
  })
})
