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

const testError = (err) => {
  expect(err.message).toEqual('No options passed to `.findBy()` method')
  expect(err.status).toEqual(500)
  expect(err.code).toEqual('ERR_INCORRECT_OPTIONS_ARG')
}

test.concurrent.each(table)(
  "shouldn't find %s when calling `.findBy()` method without options",
  async (name) => {
    try {
      await bling[name]().findBy()
      expect(false).toBe(true)
    } catch (err) {
      testError(err)
    }
  }
)
