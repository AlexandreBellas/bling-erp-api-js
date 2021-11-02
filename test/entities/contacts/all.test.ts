import { bling } from '../../config/bling'

jest.setTimeout(60000)

test('should get all contacts when calling `.all()` method with raw option settled to false', async () => {
  await expect(bling.contacts().all({ raw: false })).resolves.toBeDefined()
})

test('should get all contacts when calling `.all()` method with raw option settled to true', async () => {
  await expect(bling.contacts().all({ raw: true })).resolves.toBeDefined()
})

test('should get all contacts when calling `.all()` method without raw option', async () => {
  await expect(bling.contacts().all()).resolves.toBeDefined()
})
