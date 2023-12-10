import { Chance } from 'chance'
import { Nfes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import createResponse, { createRequestBody } from './create-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import getResponse from './get-response'
import postAccountsResponse from './post-accounts-response'
import reverseAccountsResponse from './reverse-accounts-response'
import sendResponse from './send-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('NF-es entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Nfes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Nfes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete successfully', async () => {
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)
    const idsNotas: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsNotas.push(chance.natural())
    }

    const response = await entity.delete({ idsNotas })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfe',
      id: '',
      params: { idsNotas }
    })
    expect(response).toBe(deleteResponse)
  })

  it('should get successfully', async () => {
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(getResponse)

    const response = await entity.get()

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfe',
      params: {
        limite: undefined,
        pagina: undefined,
        numeroLoja: undefined,
        situacao: undefined,
        tipo: undefined,
        dataEmissaoInicial: undefined,
        dataEmissaoFinal: undefined
      }
    })
    expect(response).toBe(getResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idNotaFiscal = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idNotaFiscal })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfe',
      id: String(idNotaFiscal)
    })
    expect(response).toBe(findResponse)
  })

  it('should create successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(createResponse)

    const response = await entity.create(createRequestBody)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfe',
      body: createRequestBody
    })
    expect(response).toBe(createResponse)
  })

  it('should send successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscal = chance.natural()
    repository.setResponse(sendResponse)

    const response = await entity.send({ idNotaFiscal })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfe/${idNotaFiscal}/enviar`,
      body: {}
    })
    expect(response).toBe(sendResponse)
  })

  it('should post accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscal = chance.natural()
    repository.setResponse(postAccountsResponse)

    const response = await entity.postAccounts({ idNotaFiscal })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfe/${idNotaFiscal}/lancar-contas`,
      body: {}
    })
    expect(response).toBe(postAccountsResponse)
  })

  it('should reverse accounts successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const idNotaFiscal = chance.natural()
    repository.setResponse(reverseAccountsResponse)

    const response = await entity.reverseAccounts({ idNotaFiscal })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `nfe/${idNotaFiscal}/estornar-contas`,
      body: {}
    })
    expect(response).toBe(reverseAccountsResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idNotaFiscal = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idNotaFiscal,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'nfe',
      id: String(idNotaFiscal),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
