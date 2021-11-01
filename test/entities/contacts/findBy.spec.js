import { bling } from '../../config/bling'

jest.setTimeout(60000)

const testError = (err) => {
  expect(err.message).toEqual('No options passed to `.findBy()` method')
  expect(err.status).toEqual(500)
  expect(err.code).toEqual('ERR_INCORRECT_OPTIONS_ARG')
}

test("shouldn't find contacts when calling `.findBy()` method without options", async () => {
  try {
    await bling.contacts().findBy()
    expect(false).toBe(true)
  } catch (err) {
    testError(err)
  }
})
