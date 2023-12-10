import { Chance } from 'chance'
import { PedidosCompras } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changeSituationResponse from './change-situation-response'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import postAccountsResponse from './post-accounts-response'
import postStockResponse from './post-stock-response'
import reverseAccountsResponse from './reverse-accounts-response'
import reverseStockResponse from './reverse-stock-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Pedidos - Compras entity', () => {
  let repository: InMemoryBlingRepository
  let entity: PedidosCompras

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new PedidosCompras(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const idPedidoCompra = chance.natural()
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      id: String(idPedidoCompra)
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      params: {
        limite: undefined,
        pagina: undefined,
        idFornecedor: undefined,
        valorSituacao: undefined,
        idSituacao: undefined,
        dataInicial: undefined,
        dataFinal: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idPedidoCompra = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      id: String(idPedidoCompra)
    })
    expect(response).toBe(findResponse)
  })

  it('should change situation successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idPedidoCompra = chance.natural()
    repository.setResponse(changeSituationResponse)

    const response = await entity.changeSituation({ idPedidoCompra, valor: 0 })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      id: `${idPedidoCompra}/situacoes`,
      body: { valor: 0 }
    })
    expect(response).toBe(changeSituationResponse)
  })

  it('should post accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoCompra = chance.natural()
    repository.setResponse(postAccountsResponse)

    const response = await entity.postAccounts({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/compras/${idPedidoCompra}/lancar-contas`,
      body: {}
    })
    expect(response).toBe(postAccountsResponse)
  })

  it('should reverse accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoCompra = chance.natural()
    repository.setResponse(reverseAccountsResponse)

    const response = await entity.reverseAccounts({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/compras/${idPedidoCompra}/estornar-contas`,
      body: {}
    })
    expect(response).toBe(reverseAccountsResponse)
  })

  it('should post stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoCompra = chance.natural()
    repository.setResponse(postStockResponse)

    const response = await entity.postStock({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/compras/${idPedidoCompra}/lancar-estoque`,
      body: {}
    })
    expect(response).toBe(postStockResponse)
  })

  it('should reverse stock successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idPedidoCompra = chance.natural()
    repository.setResponse(reverseStockResponse)

    const response = await entity.reverseStock({ idPedidoCompra })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `pedidos/compras/${idPedidoCompra}/estornar-estoque`,
      body: {}
    })
    expect(response).toBe(reverseStockResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idPedidoCompra = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idPedidoCompra,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'pedidos/compras',
      id: String(idPedidoCompra),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
