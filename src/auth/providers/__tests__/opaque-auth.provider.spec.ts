import { OpaqueAuthProvider } from '../opaque-auth.provider'

describe('OpaqueAuthProvider', () => {
  it('should apply Bearer header only', () => {
    const provider = new OpaqueAuthProvider({
      method: 'opaque',
      accessToken: 'opaque-token'
    })
    const headers: Record<string, string> = {}

    provider.applyRequestHeaders(headers)

    expect(headers).toEqual({
      Authorization: 'Bearer opaque-token'
    })
  })
})
