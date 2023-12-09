import { Chance } from 'chance'
import { Usuarios } from '..'
import { InMemoryBlingRepository } from '../../../repositories/bling-in-memory.repository'
import changePasswordResponse from './change-password-response'
import recoverPasswordResponse from './recover-password-response'
import validateHashResponse from './validate-hash-response'

const chance = Chance()

describe('Usuários entity', () => {
  let repository: InMemoryBlingRepository
  let entity: Usuarios

  beforeEach(() => {
    repository = new InMemoryBlingRepository()
    entity = new Usuarios(repository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should validate hash successfully', async () => {
    const hash = chance.word()
    const spy = jest.spyOn(repository, 'index')
    repository.setResponse(validateHashResponse)

    const response = await entity.validateHash({ hash })

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'usuarios/verificar-hash',
      params: { hash }
    })
    expect(response).toBe(validateHashResponse)
  })

  it('should change password successfully', async () => {
    const spy = jest.spyOn(repository, 'update')
    const password = chance.word()
    repository.setResponse(changePasswordResponse)

    const response = await entity.changePassword(password)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'usuarios/redefinir-senha',
      id: '',
      body: password
    })
    expect(response).toBe(changePasswordResponse)
  })

  it('should recover password successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const email = chance.email()
    repository.setResponse(recoverPasswordResponse)

    const response = await entity.recoverPassword(email)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'usuarios/recuperar-senha',
      body: email
    })
    expect(response).toBe(recoverPasswordResponse)
  })
})
