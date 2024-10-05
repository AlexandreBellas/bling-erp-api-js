import { Chance } from 'chance'
import { NaturezasDeOperacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IObtainTaxResponse } from '../interfaces/obtain-tax.interface'
import { IGetResponse } from '../interfaces/get.interface'
import obtainTaxResponse, {
  obtainTaxRequestBody
} from './obtain-tax-response'
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

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should obtain tax successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNaturezaOperacao = chance.natural()
    repository.setResponse(obtainTaxResponse)

    const response = await entity.obtainTax({
      idNaturezaOperacao,
      ...obtainTaxRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `naturezas-operacoes/${idNaturezaOperacao}/calcular-imposto-item`,
      body: obtainTaxRequestBody
    })
    expect(response).toBe(obtainTaxResponse)

    const typingResponseTest: IObtainTaxResponse =
      obtainTaxResponse
    expect(typingResponseTest).toBe(obtainTaxResponse)
  })
})
