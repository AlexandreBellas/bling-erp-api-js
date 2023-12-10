import { Chance } from 'chance'
import { ProdutosVariacoes } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changeAttributeNameResponse, {
  changeAttributeNameRequest
} from './change-attribute-name-response'
import findResponse from './find-response'
import generateCombinationsResponse, {
  generateCombinationsRequest
} from './generate-combinations-response'

const chance = Chance()

describe('Produtos - Variações entity', () => {
  let repository: InMemoryBlingRepository
  let entity: ProdutosVariacoes

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new ProdutosVariacoes(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should find successfully', async () => {
    const spy = jest.spyOn(repository, 'show')
    const idProdutoPai = chance.natural()
    repository.setResponse(findResponse)

    const response = await entity.find({ idProdutoPai })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/variacoes',
      id: String(idProdutoPai)
    })
    expect(response).toBe(findResponse)
  })

  it('should change attribute name successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const idProdutoPai = chance.natural()
    repository.setResponse(changeAttributeNameResponse)

    const response = await entity.changeAttributeName({
      idProdutoPai,
      ...changeAttributeNameRequest
    })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/variacoes',
      id: `${idProdutoPai}/atributos`,
      body: changeAttributeNameRequest
    })
    expect(response).toBe(changeAttributeNameResponse)
  })

  it('should generate combinations successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    repository.setResponse(generateCombinationsResponse)

    const response = await entity.generateCombinations(
      generateCombinationsRequest
    )

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'produtos/variacoes/atributos/gerar-combinacoes',
      body: generateCombinationsRequest
    })
    expect(response).toBe(generateCombinationsResponse)
  })
})
