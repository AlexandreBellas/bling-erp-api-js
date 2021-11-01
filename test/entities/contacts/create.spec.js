import { bling } from '../../config/bling'
import gerarCpf from 'gerar-cpf'

jest.setTimeout(60000)

const testError = (err, message, status, code) => {
  expect(err.message).toBe(message)
  expect(err.status).toBe(status)
  expect(err.code).toBe(code)
}

test.concurrent(
  "shouldn't create a contact when calling `.create()` method without any parameters",
  async () => {
    try {
      await bling.contacts().create()
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "data" argument must be a not empty object',
        500,
        'ERR_INCORRECT_DATA_ARG'
      )
    }
  }
)

test.concurrent(
  "shouldn't create a contact when calling `.create()` method with data as string",
  async () => {
    try {
      await bling.contacts().create('')
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "data" argument must be a not empty object',
        500,
        'ERR_INCORRECT_DATA_ARG'
      )
    }
  }
)

test.concurrent(
  "shouldn't create a contact when calling `.create()` method with data as number",
  async () => {
    try {
      await bling.contacts().create(123)
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "data" argument must be a not empty object',
        500,
        'ERR_INCORRECT_DATA_ARG'
      )
    }
  }
)

test.concurrent(
  "shouldn't create a contact when calling `.create()` method with data as array",
  async () => {
    try {
      await bling.contacts().create([])
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "data" argument must be a not empty object',
        500,
        'ERR_INCORRECT_DATA_ARG'
      )
    }
  }
)

test.concurrent(
  "shouldn't create a contact when calling `.create()` method with data as an empty object",
  async () => {
    try {
      await bling.contacts().create({})
      expect(false).toBe(true)
    } catch (err) {
      testError(
        err,
        'The "data" argument must be a not empty object',
        500,
        'ERR_INCORRECT_DATA_ARG'
      )
    }
  }
)

test("shouldn't create a contact when calling `.create()` method with missing name", async () => {
  try {
    await bling.contacts().create({
      cpf_cnpj: gerarCpf(),
      tipoPessoa: 'F',
      contribuinte: '9'
    })
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'Error on create method after request call',
      400,
      'ERR_ENTITY_CREATION_FAILURE'
    )
  }
})

test("shouldn't create a contact when calling `.create()` method with missing cpf_cnpj", async () => {
  try {
    await bling.contacts().create({
      nome: 'Usuário Teste',
      tipoPessoa: 'F',
      contribuinte: '9'
    })
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'Error on create method after request call',
      400,
      'ERR_ENTITY_CREATION_FAILURE'
    )
  }
})

test("shouldn't create a contact when calling `.create()` method with missing tipoPessoa", async () => {
  try {
    await bling.contacts().create({
      nome: 'Usuário Teste',
      cpf_cnpj: gerarCpf(),
      contribuinte: '9'
    })
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'Error on create method after request call',
      400,
      'ERR_ENTITY_CREATION_FAILURE'
    )
  }
})

test("shouldn't create a contact when calling `.create()` method with missing contribuinte", async () => {
  try {
    await bling.contacts().create({
      nome: 'Usuário Teste',
      cpf_cnpj: gerarCpf(),
      tipoPessoa: 'F'
    })
    expect(false).toBe(true)
  } catch (err) {
    testError(
      err,
      'Error on create method after request call',
      400,
      'ERR_ENTITY_CREATION_FAILURE'
    )
  }
})

test('should create a contact when calling `.create()` method with proper data', async () => {
  await expect(
    bling.contacts().create({
      nome: 'Usuário Teste',
      cpf_cnpj: gerarCpf(),
      tipoPessoa: 'F',
      contribuinte: '9'
    })
  ).resolves.toBeDefined()
})
