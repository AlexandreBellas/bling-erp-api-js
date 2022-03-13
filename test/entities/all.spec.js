import { bling } from '../config/bling'

jest.setTimeout(60000)

const table = [
  'billsToPay',
  'billsToReceive',
  'categories',
  'commercialProposals',
  'contacts',
  // 'contracts',
  'ctes',
  'deposits',
  'invoices',
  'orders',
  'paymentMethods',
  'productGroups',
  'products',
  'purchaseOrders',
  'shopCategories'
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

test.each(table)(
  'should get a single page of %s when calling `.all()` method with page option',
  async (name) => {
    await expect(bling[name]().all({ page: 5 })).resolves.toBeDefined()
  }
)
