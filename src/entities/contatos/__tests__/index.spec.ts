import { Chance } from 'chance'
import { Contatos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changeSituationManyResponse, {
  changeSituationManyRequest
} from './change-situation-many-response'
import changeSituationResponse, {
  changeSituationRequest
} from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteManyResponse from './delete-many-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import findTypesResponse from './find-types-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Contatos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Contatos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Contatos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const idsContatos = []
    for (let i = 0; i < chance.natural({ min: 2, max: 10 }); i++) {
      idsContatos.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)

    const response = await entity.deleteMany({ idsContatos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: '',
      params: { idsContatos }
    })
    expect(response).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idContato = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idContato })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: String(idContato)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      params: {
        limite: undefined,
        pagina: undefined,
        pesquisa: undefined,
        criterio: undefined,
        idTipoContato: undefined,
        idVendedor: undefined,
        uf: undefined,
        telefone: undefined,
        idsContatos: undefined,
        numeroDocumento: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContato = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idContato })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: String(idContato)
    })
    expect(response).toBe(findResponse)
  })

  it('should find types successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idContato = chance.natural()
    repository.setResponse(findTypesResponse)

    const response = await entity.findTypes({ idContato })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: `${idContato}/tipos`
    })
    expect(response).toBe(findTypesResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idContato = chance.natural()
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idContato,
      ...changeSituationRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: `${idContato}/situacoes`,
      body: changeSituationRequest
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should change situation many successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(changeSituationManyResponse)

    const response = await entity.changeSituationMany(
      changeSituationManyRequest
    )

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos/situacoes',
      body: changeSituationManyRequest
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idContato = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idContato,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'contatos',
      id: String(idContato),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
