import { bling } from '../../config/bling'

jest.setTimeout(100000)

test('should get all products when calling `.all()` method with raw option settled to false', async () => {
  await expect(bling.products().all({ raw: false })).resolves.toBeDefined()
})

test('should get all products when calling `.all()` method with raw option settled to true', async () => {
  await expect(bling.products().all({ raw: true })).resolves.toBeDefined()
})

test('should get all products when calling `.all()` method without raw option', async () => {
  await expect(bling.products().all()).resolves.toBeDefined()
})
