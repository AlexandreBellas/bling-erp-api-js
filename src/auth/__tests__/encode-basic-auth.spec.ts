import { encodeBasicAuth } from '../encode-basic-auth'

describe('encodeBasicAuth', () => {
  it('should base64-encode client_id:client_secret', () => {
    expect(encodeBasicAuth('id', 'secret')).toBe(
      Buffer.from('id:secret', 'utf8').toString('base64')
    )
  })
})
