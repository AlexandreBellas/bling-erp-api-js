import { bling } from '../../config/bling'

jest.setTimeout(60000)

const supplierId = 15343066051
const productId = 'FFF-123'

test('should find products by supplier code when calling `.findBySupplierCode()` method without raw option', async () => {
  await expect(
    bling.products().findBySupplierCode(productId, supplierId)
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with raw option settled up to true', async () => {
  await expect(
    bling.products().findBySupplierCode(productId, supplierId, {}, true)
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with raw option settled up to false', async () => {
  await expect(
    bling.products().findBySupplierCode(productId, supplierId, {}, false)
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options without raw option', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(productId, supplierId, { estoque: 'S', imagem: 'S' })
  ).resolves.toBeDefined()
})

test('should find products by supplier code when calling `.findBySupplierCode()` method with options with raw option settled up to true', async () => {
  await expect(
    bling
      .products()
      .findBySupplierCode(
        productId,
        supplierId,
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
        productId,
        supplierId,
        { estoque: 'S', imagem: 'S' },
        false
      )
  ).resolves.toBeDefined()
})
