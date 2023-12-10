import { Chance } from 'chance'
import { NaturezasDeOperacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import calculateItemTaxResponse, {
  calculateItemTaxRequestBody
} from './calculate-item-tax-response'
import getResponse from './get-response'

const chance = Chance()

describe('Naturezas de Operação entity', () => {
  let repository: InMemoryBlingRepository
  let entity: NaturezasDeOperacoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new NaturezasDeOperacoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'naturezas-operacoes',
      params: {
        limite: undefined,
        pagina: undefined,
        situacao: undefined,
        descricao: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should calculate item tax successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNaturezaOperacao = chance.natural()
    repository.setResponse(calculateItemTaxResponse)

    const response = await entity.calculateItemTax({
      idNaturezaOperacao,
      ...calculateItemTaxRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `naturezas-operacoes/${idNaturezaOperacao}/calcular-imposto-item`,
      body: calculateItemTaxRequestBody
    })
    expect(response).toBe(calculateItemTaxResponse)
  })
})
