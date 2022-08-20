import { bling, defaultBeforeEach } from '../../config/bling'

jest.setTimeout(60000)

beforeEach(() => {
  return defaultBeforeEach()
})

test('should find contacts when calling `.findBy()` method with options', async () => {
  await expect(
    bling.contacts().findBy({
      filters: { tipoPessoa: 'F', dataInclusao: '01/08/2021 TO 31/08/2021' }
    })
  ).resolves.toBeDefined()
})
