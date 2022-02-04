import {
  bling,
  exampleSupplierId,
  exampleSupplierProductId
} from '../../config/bling'

jest.setTimeout(60000)

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
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {}, true)
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with raw option settled up to false', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(
        exampleSupplierProductId,
        exampleSupplierId,
        {},
        false
      )
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options without raw option', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(exampleSupplierProductId, exampleSupplierId, {
        estoque: 'S',
        imagem: 'S'
      })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options with raw option settled up to true', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(
        exampleSupplierProductId,
        exampleSupplierId,
        { estoque: 'S', imagem: 'S' },
        true
      )
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options with raw option settled up to false', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(
        exampleSupplierProductId,
        exampleSupplierId,
        { estoque: 'S', imagem: 'S' },
        false
      )
  ).resolves.toBeDefined()
})
