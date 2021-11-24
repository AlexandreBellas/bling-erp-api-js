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

const testIdError = (err) => {
  expect(err.message).toEqual('The "id" argument must be a number or string.')
  expect(err.status).toEqual(500)
  expect(err.code).toEqual('ERR_INCORRECT_ID_ARG')
}

test.concurrent.each(table)(
  "shouldn't find a %s when calling `.find()` method without any parameters",
  async (name) => {
    try {
      await bling[name]().find()
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)

test.concurrent.each(table)(
  "shouldn't find a %s when calling `.find()` method with parameter as undefined",
  async (name) => {
    try {
      await bling[name]().find(undefined)
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)

test.concurrent.each(table)(
  "shouldn't find a %s when calling `.find()` method with parameter as null",
  async (name) => {
    try {
      await bling[name]().find(null)
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)

test.concurrent.each(table)(
  "shouldn't find a %s when calling `.find()` method with parameter as empty string",
  async (name) => {
    try {
      await bling[name]().find('')
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)
