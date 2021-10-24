import { Bling } from '../../lib/bling'
import { config } from 'dotenv'

config()
jest.setTimeout(60000)

const testApiKey = process.env.BLING_API_KEY as string

test('should get all products when calling `.all()` method with raw option settled to false', async () => {
  const bling = new Bling(testApiKey)

  expect(bling.products().all({ raw: false })).resolves.toBeDefined()
})

test('should get all products when calling `.all()` method with raw option settled to true', async () => {
  const bling = new Bling(testApiKey)

  expect(bling.products().all({ raw: true })).resolves.toBeDefined()
})

test('should get all products when calling `.all()` method without raw option', async () => {
  const bling = new Bling(testApiKey)

  expect(bling.products().all()).resolves.toBeDefined()
})
