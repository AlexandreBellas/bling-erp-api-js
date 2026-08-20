import { createAuthProvider } from '../create-auth-provider'
import { JwtAuthProvider } from '../providers/jwt-auth.provider'
import { OAuthAuthProvider } from '../providers/oauth-auth.provider'
import { OpaqueAuthProvider } from '../providers/opaque-auth.provider'

describe('createAuthProvider', () => {
  it('should create a JWT provider', () => {
    expect(
      createAuthProvider({ method: 'jwt', accessToken: 't' })
    ).toBeInstanceOf(JwtAuthProvider)
  })

  it('should create an opaque provider', () => {
    expect(
      createAuthProvider({ method: 'opaque', accessToken: 't' })
    ).toBeInstanceOf(OpaqueAuthProvider)
  })

  it('should create an OAuth provider', () => {
    expect(
      createAuthProvider({
        method: 'oauth',
        clientId: 'id',
        clientSecret: 'secret'
      })
    ).toBeInstanceOf(OAuthAuthProvider)
  })
})
