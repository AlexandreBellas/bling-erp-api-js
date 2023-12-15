import { Chance } from 'chance'
import { PedidosVendas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import { ICreateResponse } from '../interfaces/create.interface'
import { IDeleteManyResponse } from '../interfaces/delete-many.interface'
import { IFindResponse } from '../interfaces/find.interface'
import { IGetResponse } from '../interfaces/get.interface'
import { IUpdateResponse } from '../interfaces/update.interface'
import changeSituationResponse from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteManyResponse from './delete-many-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import postAccountsResponse from './post-accounts-response'
import postStockResponse from './post-stock-response'
import postStockToDepositResponse from './post-stock-to-deposit-response'
import reverseAccountsResponse from './reverse-accounts-response'
import reverseStockResponse from './reverse-stock-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Pedidos - Vendas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: PedidosVendas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new PedidosVendas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete many successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteManyResponse)
    const idsPedidosVendas: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsPedidosVendas.push(chance.natural())
    }

    const response = await entity.deleteMany({ idsPedidosVendas })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      id: '',
      params: { idsPedidosVendas }
    })
    expect(response).toBe(deleteManyResponse)

    const typingResponseTest: IDeleteManyResponse = deleteManyResponse
    expect(typingResponseTest).toBe(deleteManyResponse)
  })

  it('should delete successfully', async () => {
    const idPedidoVenda = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      id: String(idPedidoVenda)
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
      endpoint: 'pedidos/vendas',
      params: {
        limite: undefined,
        pagina: undefined,
        idContato: undefined,
        idsSituacoes: undefined,
        dataInicial: undefined,
        dataFinal: undefined,
        dataAlteracaoInicial: undefined,
        dataAlteracaoFinal: undefined,
        dataPrevistaInicial: undefined,
        dataPrevistaFinal: undefined,
        numero: undefined,
        idLoja: undefined,
        idVendedor: undefined,
        idControleCaixa: undefined,
        numerosLojas: undefined
      }
    })
    expect(response).toBe(getResponse)

    const typingResponseTest: IGetResponse = getResponse
    expect(typingResponseTest).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idPedidoVenda = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      id: String(idPedidoVenda)
    })
    expect(response).toBe(findResponse)

    const typingResponseTest: IFindResponse = findResponse
    expect(typingResponseTest).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idPedidoVenda = chance.natural()
    const idSituacao = 0
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({ idPedidoVenda, idSituacao })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      id: `${idPedidoVenda}/situacoes/${idSituacao}`,
      body: {}
    })
    expect(response).toBe(changeSituationResponse)

    const typingResponseTest: null = changeSituationResponse
    expect(typingResponseTest).toBe(changeSituationResponse)
  })

  it('should post stock to deposit successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoVenda = chance.natural()
    const idDeposito = chance.natural()
    repository.setResponse(postStockToDepositResponse)

    const response = await entity.postStockToDeposit({
      idPedidoVenda,
      idDeposito
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/vendas/${idPedidoVenda}/lancar-estoque/${idDeposito}`,
      body: {}
    })
    expect(response).toBe(postStockToDepositResponse)

    const typingResponseTest: null = postStockToDepositResponse
    expect(typingResponseTest).toBe(postStockToDepositResponse)
  })

  it('should post stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoVenda = chance.natural()
    repository.setResponse(postStockResponse)

    const response = await entity.postStock({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/vendas/${idPedidoVenda}/lancar-estoque`,
      body: {}
    })
    expect(response).toBe(postStockResponse)

    const typingResponseTest: null = postStockResponse
    expect(typingResponseTest).toBe(postStockResponse)
  })

  it('should reverse stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoVenda = chance.natural()
    repository.setResponse(reverseStockResponse)

    const response = await entity.reverseStock({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/vendas/${idPedidoVenda}/estornar-estoque`,
      body: {}
    })
    expect(response).toBe(reverseStockResponse)

    const typingResponseTest: null = reverseStockResponse
    expect(typingResponseTest).toBe(reverseStockResponse)
  })

  it('should post accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoVenda = chance.natural()
    repository.setResponse(postAccountsResponse)

    const response = await entity.postAccounts({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/vendas/${idPedidoVenda}/lancar-contas`,
      body: {}
    })
    expect(response).toBe(postAccountsResponse)

    const typingResponseTest: null = postAccountsResponse
    expect(typingResponseTest).toBe(postAccountsResponse)
  })

  it('should reverse accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoVenda = chance.natural()
    repository.setResponse(reverseAccountsResponse)

    const response = await entity.reverseAccounts({ idPedidoVenda })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/vendas/${idPedidoVenda}/estornar-contas`,
      body: {}
    })
    expect(response).toBe(reverseAccountsResponse)

    const typingResponseTest: null = reverseAccountsResponse
    expect(typingResponseTest).toBe(reverseAccountsResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)

    const typingResponseTest: ICreateResponse = createResponse
    expect(typingResponseTest).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idPedidoVenda = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idPedidoVenda,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/vendas',
      id: String(idPedidoVenda),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)

    const typingResponseTest: IUpdateResponse = updateResponse
    expect(typingResponseTest).toBe(updateResponse)
  })
})
