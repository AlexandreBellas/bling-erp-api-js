import { Chance } from 'chance'
import { CamposCustomizados } from '../'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import ISituacao from '../../@shared/types/situacao.type'
import changeSituationResponse from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findByModuleResponse from './find-by-module-response'
import findResponse from './find-response'
import getModulesResponse from './get-modules-response'
import getTypesResponse from './get-types-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Campos customizados entity', () => {
  let repository: InMemoryBlingRepository
  let entity: CamposCustomizados

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new CamposCustomizados(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idCampoCustomizado = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idCampoCustomizado })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados',
      id: String(idCampoCustomizado)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get modules successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getModulesResponse)

    const response = await entity.getModules()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados/modulos'
    })
    expect(response).toBe(getModulesResponse)
  })

  it('should get types successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getTypesResponse)

    const response = await entity.getTypes()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados/tipos'
    })
    expect(response).toBe(getTypesResponse)
  })

  it('should find by module successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idModulo = chance.natural()
    const pagina = chance.pickone([chance.natural(), undefined])
    const limite = chance.pickone([chance.natural(), undefined])
    repository.setResponse(findByModuleResponse)

    const response = await entity.findByModule({ idModulo, pagina, limite })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados/modulos',
      id: String(idModulo),
      params: {
        pagina,
        limite
      }
    })
    expect(response).toBe(findByModuleResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idCampoCustomizado = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idCampoCustomizado })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados',
      id: String(idCampoCustomizado)
    })
    expect(response).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idCampoCustomizado = chance.natural()
    const situacao = chance.pickone([0, 1]) as ISituacao
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idCampoCustomizado,
      situacao
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados',
      id: `${idCampoCustomizado}/situacoes`,
      body: { situacao }
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idCampoCustomizado = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idCampoCustomizado,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'campos-customizados',
      id: String(idCampoCustomizado),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
