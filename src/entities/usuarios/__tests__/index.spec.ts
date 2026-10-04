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
    const body = { hash: chance.hash(), password: chance.word() }
    repository.setResponse(changePasswordResponse)

    const response = await entity.changePassword(body)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'usuarios/redefinir-senha',
      id: '',
      body
    })
    expect(response).toBe(changePasswordResponse)
  })

  it('should recover password successfully', async () => {
    const spy = jest.spyOn(repository, 'store')
    const body = { email: chance.email() }
    repository.setResponse(recoverPasswordResponse)

    const response = await entity.recoverPassword(body)

    expect(spy).toHaveBeenCalledWith({
      endpoint: 'usuarios/recuperar-senha',
      body
    })
    expect(response).toBe(recoverPasswordResponse)
  })
})
