import { Chance } from 'chance'
import { ProdutosLotes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import deleteManyResponse from './delete-many-response'
import { IGetResponse } from '../interfaces/get.interface'
import getResponse from './get-response'
import { IFindResponse } from '../interfaces/find.interface'
import findResponse from './find-response'
import { IGetLotControlResponse } from '../interfaces/get-lot-control.interface'
import getLotControlResponse from './get-lot-control-response'
import { IUpdateManyResponse } from '../interfaces/update-many.interface'
import updateManyResponse, {
  updateManyRequestBody
} from './update-many-response'
import updateResponse, { updateRequestBody } from './update-response'
import disableLotControlResponse from './disable-lot-control-response'
import changeStatusResponse, {
  changeStatusRequestBody
} from './change-status-response'

const chance = Chance()

describe('ProdutosLotes entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosLotes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosLotes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)
    const idsLotes = [chance.natural(), chance.natural()]
    const response = await entity.deleteMany({ idsLotes })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: '',
      params: {
        idsLotes
      }
    })
    expect(response).toBe(deleteManyResponse)

    const typingResponseTest: null = deleteManyResponse
    expect(typingResponseTest).toBe(deleteManyResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)
    const idsProdutos = [chance.natural(), chance.natural()]
    const response = await entity.get({ idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      params: {
        pagina: undefined,
        limite: undefined,
        idsProdutos,
        idsLotes: undefined,
        idsDepositos: undefined,
        codigosLotes: undefined,
        status: undefined,
        dataValidadeInicial: undefined,
        dataValidadeFinal: undefined,
        dataFabricacaoInicial: undefined,
        dataFabricacaoFinal: undefined,
        dataCriacaoInicial: undefined,
        dataCriacaoFinal: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    repository.setResponse(findResponse)
    const idLote = chance.natural()
    const response = await entity.find({ idLote })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: String(idLote)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should get lot control successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getLotControlResponse)
    const idsProdutos = [chance.natural(), chance.natural()]
    const response = await entity.getLotControl({ idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes/controla-lote',
      params: {
        idsProdutos
      }
    })
    expect(response).toBe(getLotControlResponse)

    const typingResponseTest: IGetLotControlResponse = getLotControlResponse
    expect(typingResponseTest).toBe(getLotControlResponse)
  })

  it('should update many successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateManyResponse)
    const response = await entity.updateMany(updateManyRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: '',
      body: updateManyRequestBody
    })
    expect(response).toBe(updateManyResponse)

    const typingResponseTest: IUpdateManyResponse = updateManyResponse
    expect(typingResponseTest).toBe(updateManyResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    repository.setResponse(updateResponse)
    const idLote = chance.natural()
    const response = await entity.update({ idLote, ...updateRequestBody })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: String(idLote),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: null = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })

  it('should disable lot control successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(disableLotControlResponse)
    const idProduto = chance.natural()
    const response = await entity.disableLotControl({ idProduto })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `produtos/${idProduto}/lotes/controla-lote/desativar`,
      body: {}
    })
    expect(response).toBe(disableLotControlResponse)

    const typingResponseTest: null = disableLotControlResponse
    expect(typingResponseTest).toBe(disableLotControlResponse)
  })

  it('should change status successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(changeStatusResponse)
    const idLote = chance.natural()
    const response = await entity.changeStatus({
      idLote,
      ...changeStatusRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/lotes',
      id: `${idLote}/status`,
      body: changeStatusRequestBody
    })
    expect(response).toBe(changeStatusResponse)

    const typingResponseTest: null = changeStatusResponse
    expect(typingResponseTest).toBe(changeStatusResponse)
  })
})
