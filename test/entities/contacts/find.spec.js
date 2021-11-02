import { bling } from '../../config/bling'

jest.setTimeout(60000)

const testIdError = (err) => {
  expect(err.message).toEqual('The "id" argument must be a number or string.')
  expect(err.status).toEqual(500)
  expect(err.code).toEqual('ERR_INCORRECT_ID_ARG')
}

test.concurrent(
  "shouldn't find a contact when calling `.find()` method without any parameters",
  async () => {
    try {
      await bling.contacts().find()
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)

test.concurrent(
  "shouldn't find a contact when calling `.find()` method with a nullable parameter",
  async () => {
    try {
      await bling.contacts().find(undefined)
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }

    try {
      await bling.contacts().find(null)
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }

    try {
      await bling.contacts().find('')
      expect(false).toBe(true)
    } catch (err) {
      testIdError(err)
    }
  }
)
