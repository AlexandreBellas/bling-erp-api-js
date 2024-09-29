import { Chance } from 'chance'
import { Produtos } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { IChangeSituationManyResponse } from '../interfaces/change-situation-many.interface'
import { ICreateResponse } from '../interfaces/create.interface'
import { IDeleteManyResponse } from '../interfaces/delete-many.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import { IUpdateResponse } from '../interfaces/update.interface'
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
import getResponse from './get-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Produtos entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Produtos

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Produtos(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const idsProdutos: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsProdutos.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)

    const response = await entity.deleteMany({ idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: '',
      params: { idsProdutos }
    })
    expect(response).toBe(deleteManyResponse)

    const typingResponseTest: IDeleteManyResponse = deleteManyResponse
    expect(typingResponseTest).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idProduto = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: String(idProduto)
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
      endpoint: 'produtos',
      params: {
        limite: undefined,
        pagina: undefined,
        criterio: undefined,
        tipo: undefined,
        idComponente: undefined,
        dataInclusaoInicial: undefined,
        dataInclusaoFinal: undefined,
        dataAlteracaoInicial: undefined,
        dataAlteracaoFinal: undefined,
        idCategoria: undefined,
        idLoja: undefined,
        codigo: undefined,
        nome: undefined,
        idsProdutos: undefined,
        codigos: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idProduto = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: String(idProduto)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idProduto = chance.natural()
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({
      idProduto,
      ...changeSituationRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: `${idProduto}/situacoes`,
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
      endpoint: 'produtos',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should change situation many successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(changeSituationManyResponse)

    const response = await entity.changeSituationMany(
      changeSituationManyRequest
    )

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/situacoes',
      body: changeSituationManyRequest
    })
    expect(response).toBe(changeSituationManyResponse)

    const typingResponseTest: IChangeSituationManyResponse =
      changeSituationManyResponse
    expect(typingResponseTest).toBe(changeSituationManyResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idProduto = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idProduto,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos',
      id: String(idProduto),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
