import { bling, defaultBeforeEach, generators } from '../../config/bling'
import { CPF } from 'cpf_cnpj'

jest.setTimeout(60000)

beforeEach(() => {
  return defaultBeforeEach()
})

const testError = (err, message, status, code) => {
  expect(err.message).toBe(message)
  expect(err.status).toBe(status)
  expect(err.code).toBe(code)
}

test("shouldn't update a contact when calling `.update()` method with data as string", async () => {
  try {
    const contact = await bling.contacts().create(generators.contacts())
    await bling.contacts().update(contact[0].id, '')
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'The "data" argument must be a not empty object',
      '500',
      'ERR_INCORRECT_UPDATE_DATA'
    )
  }
})

test("shouldn't update a contact when calling `.update()` method with data as number", async () => {
  try {
    const contact = await bling.contacts().create(generators.contacts())
    await bling.contacts().update(contact[0].id, 123)
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'The "data" argument must be a not empty object',
      '500',
      'ERR_INCORRECT_UPDATE_DATA'
    )
  }
})

test("shouldn't update a contact when calling `.update()` method with data as array", async () => {
  try {
    const contact = await bling.contacts().create(generators.contacts())
    await bling.contacts().update(contact[0].id, [])
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'The "data" argument must be a not empty object',
      '500',
      'ERR_INCORRECT_UPDATE_DATA'
    )
  }
})

test("shouldn't update a contact when calling `.update()` method with data as an empty object", async () => {
  try {
    const contact = await bling.contacts().create(generators.contacts())
    await bling.contacts().update(contact[0].id, {})
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'The "data" argument must be a not empty object',
      '500',
      'ERR_INCORRECT_UPDATE_DATA'
    )
  }
})

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with id as an empty string",
  async () => {
    try {
      await bling.contacts().update('', {
        cpf_cnpj: CPF.generate()
      })
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with an inexistent id",
  async () => {
    try {
      await bling.contacts().update(0, {
        cpf_cnpj: CPF.generate()
      })
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with id as null",
  async () => {
    try {
      await bling.contacts().update(null, {
        cpf_cnpj: CPF.generate()
      })
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with id as undefined",
  async () => {
    try {
      await bling.contacts().update(null, {
        cpf_cnpj: CPF.generate()
      })
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with id as object",
  async () => {
    try {
      await bling.contacts().update(
        {},
        {
          cpf_cnpj: CPF.generate()
        }
      )
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test.concurrent(
  "shouldn't update a contact when calling `.update()` method with id as array",
  async () => {
    try {
      await bling.contacts().update([], {
        cpf_cnpj: CPF.generate()
      })
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "id" argument must be a number or string',
        '500',
        'ERR_INCORRECT_UPDATE_ID'
      )
    }
  }
)

test('should update a contact when calling `.update()` method with proper parameters', async () => {
  const rawContact = generators.contacts()
  const contact = await bling.contacts().create(rawContact)

  await expect(
    bling.contacts().update(contact[0].id, {
      nome: 'Usuário atualizado',
      cpf_cnpj: rawContact.cpf_cnpj,
      contribuinte: rawContact.contribuinte,
      tipoPessoa: rawContact.tipoPessoa,
      ie_rg: rawContact.ie_rg
    })
  ).resolves.toBeDefined()
})
