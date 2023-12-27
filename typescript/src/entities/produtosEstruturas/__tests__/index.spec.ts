import { Chance } from 'chance'
import { ProdutosEstruturas } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import addComponentResponse, {
  addComponentRequest
} from './add-component-response'
import changeComponentResponse, {
  changeComponentRequest
} from './change-component-response'
import deleteComponentsResponse from './delete-components-response'
import deleteResponse from './delete-response'
import findResponse from './find-response'
import updateResponse, { updateRequestBody } from './update-response'

const chance = Chance()

describe('Produtos- Estruturas entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosEstruturas

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosEstruturas(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should delete components successfully', async () => {
    const idProdutoEstrutura = chance.natural()
    const idsComponentes: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsComponentes.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteComponentsResponse)

    const response = await entity.deleteComponents({
      idProdutoEstrutura,
      idsComponentes
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/estruturas',
      id: `${idProdutoEstrutura}/componentes`,
      params: { idsComponentes }
    })
    expect(response).toBe(deleteComponentsResponse)
  })

  it('should delete successfully', async () => {
    const idsProdutos: number[] = []
    for (let i = 0; i < chance.natural({ min: 1, max: 5 }); i++) {
      idsProdutos.push(chance.natural())
    }
    const spy = jest.spyOn(repository, 'destroy')
    repository.setResponse(deleteResponse)

    const response = await entity.delete({ idsProdutos })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/estruturas',
      id: '',
      params: { idsProdutos }
    })
    expect(response).toBe(deleteResponse)
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idProdutoEstrutura = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idProdutoEstrutura })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/estruturas',
      id: String(idProdutoEstrutura)
    })
    expect(response).toBe(findResponse)
  })

  it('should change component successfully', async () => {
    const idComponente = chance.natural()
    const idProdutoEstrutura = chance.natural()
    const spy = jest.spyOn(repository, 'update')
    repository.setResponse(changeComponentResponse)

    const response = await entity.changeComponent({
      idProdutoEstrutura,
      idComponente,
      ...changeComponentRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/estruturas',
      id: `${idProdutoEstrutura}/componentes/${idComponente}`,
      body: changeComponentRequest
    })
    expect(response).toBe(changeComponentResponse)
  })

  it('should add component successfully', async () => {
    const idProdutoEstrutura = chance.natural()
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(addComponentResponse)

    const response = await entity.addComponent({
      params: { idProdutoEstrutura },
      body: addComponentRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: `produtos/estruturas/${idProdutoEstrutura}`,
      body: addComponentRequest
    })
    expect(response).toBe(addComponentResponse)
  })

  it('should update successfully', async () => {
    const spy = jest.spyOn(repository, 'replace')
    const idProdutoEstrutura = chance.natural()
    repository.setResponse(updateResponse)

    const response = await entity.update({
      idProdutoEstrutura,
      ...updateRequestBody
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/estruturas',
      id: String(idProdutoEstrutura),
      body: updateRequestBody
    })
    expect(response).toBe(updateResponse)
  })
})
