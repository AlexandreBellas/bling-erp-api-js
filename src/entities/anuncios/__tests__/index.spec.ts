import { Chance } from 'chance'
import { Anuncios } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'
import { ICreateResponse } from '../interfaces/create.interface'
import createResponse, { createRequestBody } from './create-response'
import updateResponse, { updateRequestBody } from './update-response'
import deleteResponse from './delete-response'
import publishResponse from './publish-response'
import pauseResponse from './pause-response'

const chance = Chance()

describe('Anuncios entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Anuncios

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Anuncios(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.get({ tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios',
      params: {
        pagina: undefined,
        limite: undefined,
        situacao: undefined,
        idProduto: undefined,
        tipoIntegracao,
        idLoja
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idAnuncio = chance.natural()
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.find({ idAnuncio, tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios',
      id: String(idAnuncio),
      params: {
        tipoIntegracao,
        idLoja
      }
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)
    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateResponse)
    const idAnuncio = chance.natural()
    const response = await entity.update({ idAnuncio, ...updateRequestBody })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios',
      id: String(idAnuncio),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })

  it('should delete successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)
    const idAnuncio = chance.natural()
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.delete({ idAnuncio, tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'anuncios',
      id: String(idAnuncio),
      params: {
        tipoIntegracao,
        idLoja
      }
    })
    expect(response).toBe(deleteResponse)

    const typingResponseTest: null = deleteResponse
    expect(typingResponseTest).toBe(deleteResponse)
  })

  it('should publish successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(publishResponse)
    const idAnuncio = chance.natural()
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.publish({ idAnuncio, tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `anuncios/${idAnuncio}/publicar`,
      params: {
        tipoIntegracao,
        idLoja
      },
      body: {}
    })
    expect(response).toBe(publishResponse)

    const typingResponseTest: null = publishResponse
    expect(typingResponseTest).toBe(publishResponse)
  })

  it('should pause successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(pauseResponse)
    const idAnuncio = chance.natural()
    const tipoIntegracao = chance.word()
    const idLoja = chance.natural()
    const response = await entity.pause({ idAnuncio, tipoIntegracao, idLoja })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `anuncios/${idAnuncio}/pausar`,
      params: {
        tipoIntegracao,
        idLoja
      },
      body: {}
    })
    expect(response).toBe(pauseResponse)

    const typingResponseTest: null = pauseResponse
    expect(typingResponseTest).toBe(pauseResponse)
  })
})
