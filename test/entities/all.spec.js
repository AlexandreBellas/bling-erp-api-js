import { bling } from '../config/bling'

jest.setTimeout(60000)

const table = [
  'commercialProposals',
  'contacts',
  'deposits',
  'orders',
  'products',
  'purchaseOrders'
]

test.each(table)(
  'should get all %s when calling `.all()` method with raw option settled to false',
  async (name) => {
    await expect(bling[name]().all({ raw: false })).resolves.toBeDefined()
  }
)

test.each(table)(
  'should get all %s when calling `.all()` method with raw option settled to true',
  async (name) => {
    await expect(bling[name]().all({ raw: true })).resolves.toBeDefined()
  }
)

test.each(table)(
  'should get all %s when calling `.all()` method without raw option',
  async (name) => {
    await expect(bling[name]().all()).resolves.toBeDefined()
  }
)
