import { Chance } from 'chance'
import { PropostasComerciais } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IDeleteManyResponse } from '../interfaces/delete-many.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import changeSituationResponse, {
  changeSituationRequest
} from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteManyResponse from './delete-many-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('PropostasComerciais entity', () => {
  let repository: InMemoryBlingRepository
  let entity: PropostasComerciais

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new PropostasComerciais(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const idsPropostasComerciais: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsPropostasComerciais.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)

    const response = await entity.deleteMany({ idsPropostasComerciais })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      id: '',
      params: { idsPropostasComerciais }
    })
    expect(response).toBe(deleteManyResponse)

    const typingResponseTest: IDeleteManyResponse = deleteManyResponse
    expect(typingResponseTest).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idPropostaComercial = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idPropostaComercial })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      id: String(idPropostaComercial)
    })
    expect(response).toBe(deleteResponse)

    const typingResponseTest: null = deleteResponse
    expect(typingResponseTest).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      params: {
        situacao: undefined,
        idContato: undefined,
        dataInicial: undefined,
        dataFinal: undefined,
        pagina: undefined,
        limite: undefined,
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idPropostaComercial = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idPropostaComercial })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      id: String(idPropostaComercial)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idPropostaComercial = chance.natural()
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idPropostaComercial,
      ...changeSituationRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      id: `${idPropostaComercial}/situacoes`,
      body: changeSituationRequest
    })
    expect(response).toBe(changeSituationResponse)

    const typingResponseTest: null = changeSituationResponse
    expect(typingResponseTest).toBe(changeSituationResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idPropostaComercial = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idPropostaComercial,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'propostas-comerciais',
      id: String(idPropostaComercial),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
