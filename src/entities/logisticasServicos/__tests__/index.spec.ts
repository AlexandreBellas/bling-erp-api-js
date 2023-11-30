import { Chance } from 'chance'
import { LogisticasServicos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Logísticas - servicos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: LogisticasServicos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new LogisticasServicos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/servicos',
      params: {
        limite: undefined,
        pagina: undefined,
        tipoIntegracao: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idLogisticaServico = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idLogisticaServico })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/servicos',
      id: String(idLogisticaServico)
    })
    expect(response).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idLogisticaServico = chance.natural()
    const ativo = chance.bool()
    repository.setResponse(findResponse)

    const response = await entity.changeSituation({ idLogisticaServico, ativo })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas',
      id: `${String(idLogisticaServico)}/situacoes`,
      body: { ativo }
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/servicos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idLogisticaServico = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idLogisticaServico,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'logisticas/servicos',
      id: String(idLogisticaServico),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
