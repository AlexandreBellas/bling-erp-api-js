import { bling } from '../../config/bling'
import { v4 as uuidv4 } from 'uuid'

jest.setTimeout(100000)

test('should delete a product when calling `.delete()` method with an existent id', async () => {
  const product = await bling.products().create({
    descricao: 'Produto Teste',
    codigo: uuidv4()
  })

  if (product.codigo) {
    await expect(bling.products().delete(product.codigo)).resolves.toBeDefined()
  } else {
    expect(false).toBe(true)
  }
})
