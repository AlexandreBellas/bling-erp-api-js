import {
  bling,
  exampleSupplierId,
  exampleSupplierProductId,
  defaultBeforeEach
} from '../../config/bling'

jest.setTimeout(60000)

beforeEach(() => {
  return defaultBeforeEach()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method without raw option', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId)
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with raw option settled up to true', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        raw: true
      })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with raw option settled up to false', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        raw: false
      })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options without raw option', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        params: {
          estoque: 'S',
          imagem: 'S'
        }
      })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options with raw option settled up to true', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        params: { estoque: 'S', imagem: 'S' },
        raw: true
      })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options with raw option settled up to false', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        params: { estoque: 'S', imagem: 'S' },
        raw: false
      })
  ).resolves.toBeDefined()
})
