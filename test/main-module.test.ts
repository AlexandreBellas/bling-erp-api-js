import { Bling } from '../lib/bling'

test('should fail when an ordinary request is made with a bad API key', async () => {
  const bling = new Bling('1234')

  await expect(bling.products().all()).rejects.toThrow(
    'Request failed with status code 401'
  )
})
