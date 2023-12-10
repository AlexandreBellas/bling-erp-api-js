import { Chance } from 'chance'
import { SituacoesModulos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import getModuleActionsResponse from './get-module-actions-response'
import getModuleSituationsResponse from './get-module-situations-response'
import getModuleTransitionsResponse from './get-module-transitions-response'
import getModulesResponse from './get-modules-response'

const chance = Chance()

describe('Situações - Módulos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: SituacoesModulos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new SituacoesModulos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get modules successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getModulesResponse)

    const response = await entity.getModules()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/modulos'
    })
    expect(response).toBe(getModulesResponse)
  })

  it('should get module situations successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idModuloSistema = chance.natural()
    repository.setResponse(getModuleSituationsResponse)

    const response = await entity.getModuleSituations({ idModuloSistema })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/modulos',
      id: String(idModuloSistema)
    })
    expect(response).toBe(getModuleSituationsResponse)
  })

  it('should get module actions successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idModuloSistema = chance.natural()
    repository.setResponse(getModuleActionsResponse)

    const response = await entity.getModuleActions({ idModuloSistema })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/modulos',
      id: `${idModuloSistema}/acoes`
    })
    expect(response).toBe(getModuleActionsResponse)
  })

  it('should get module transitions successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idModuloSistema = chance.natural()
    repository.setResponse(getModuleTransitionsResponse)

    const response = await entity.getModuleTransitions({ idModuloSistema })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'situacoes/modulos',
      id: `${idModuloSistema}/transicoes`
    })
    expect(response).toBe(getModuleTransitionsResponse)
  })
})
