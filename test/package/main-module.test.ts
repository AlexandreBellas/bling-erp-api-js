import { Bling, IBlingError } from '../config/bling'

jest.setTimeout(50000)

const testError = (err: IBlingError) => {
  expect(err.message).toEqual(
    'Error on all method during request call: Request failed with status code 401'
  )
  expect(err.code).toEqual('ERR_GET_REQUEST_FAILURE')
  expect(err.status).toEqual('401')
}

test.concurrent(
  'should fail when an ordinary request is made with a bad API key with the instantiated module',
  async () => {
    const bling = new Bling('1234')

    try {
      await bling.products().all()
      expect(false).toBe(true)
    } catch (err) {
      testError(err as IBlingError)
    }
  }
)

test.concurrent(
  'should fail when an ordinary request is made with a bad API key with the functional module',
  async () => {
    const bling = Bling.create('1234')

    try {
      await bling.products().all()
      expect(false).toBe(true)
    } catch (err) {
      testError(err as IBlingError)
    }
  }
)
