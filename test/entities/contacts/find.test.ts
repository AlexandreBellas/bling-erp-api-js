import {
  bling,
  IBlingError,
  exampleContactId,
  defaultBeforeEach
} from '../../config/bling'

jest.setTimeout(60000)

beforeEach(() => {
  return defaultBeforeEach()
})

const testError = (err: IBlingError) => {
  expect(err.message).toEqual('Error on find method after request call')
  expect(err.code).toEqual('ERR_FIND_METHOD_FAILURE')
}

test.concurrent(
  "shouldn't find a contact when calling `.find()` method without defining params",
  async () => {
    try {
      await bling.contacts().find(exampleContactId)
      expect(false).toBe(true)
    } catch (err) {
      testError(err as IBlingError)
    }
  }
)

test.concurrent(
  'should find a contact when calling `.find()` method with an existent id',
  async () => {
    await expect(
      bling
        .contacts()
        .find(exampleContactId, { params: { identificador: '2' }, raw: false })
    ).resolves.toBeDefined()
    await expect(
      bling
        .contacts()
        .find(exampleContactId, { params: { identificador: '2' }, raw: true })
    ).resolves.toBeDefined()
  }
)

test("shouldn't find a contact when calling `.find()` method with an inexistent id with beautified response", async () => {
  try {
    await bling
      .contacts()
      .find('0', { params: { identificador: '1' }, raw: false })
    expect(false).toBe(true)
  } catch (err) {
    testError(err as IBlingError)
  }
})

test("shouldn't find a contact when calling `.find()` method with an inexistent CPF/CNPJ with beautified response", async () => {
  try {
    await bling
      .contacts()
      .find('0', { params: { identificador: '2' }, raw: false })
    expect(false).toBe(true)
  } catch (err) {
    testError(err as IBlingError)
  }
})

test("shouldn't find a contact when calling `.find()` method with an inexistent id with raw response", async () => {
  try {
    await bling
      .contacts()
      .find('0', { params: { identificador: '1' }, raw: true })
    expect(false).toBe(true)
  } catch (err) {
    testError(err as IBlingError)
  }
})

test("shouldn't find a contact when calling `.find()` method with an inexistent CPF/CNPJ with raw response", async () => {
  try {
    await bling
      .contacts()
      .find('0', { params: { identificador: '2' }, raw: true })
    expect(false).toBe(true)
  } catch (err) {
    testError(err as IBlingError)
  }
})
