import { JwtAuthProvider } from '../jwt-auth.provider'

describe('JwtAuthProvider', () => {
  it('should apply Bearer and enable-jwt headers', () => {
    const provider = new JwtAuthProvider({
      method: 'jwt',
      accessToken: 'jwt-token'
    })
    const headers: Record<string, string> = {}

    provider.applyRequestHeaders(headers)

    expect(headers).toEqual({
      Authorization: 'Bearer jwt-token',
      'enable-jwt': '1'
    })
  })
})
