import { bling } from '../../config/bling'

jest.setTimeout(60000)

test('should find contacts when calling `.findBy()` method with options', async () => {
  await expect(
    bling
      .contacts()
      .findBy({ tipoPessoa: 'F', dataInclusao: '01/08/2021 TO 31/08/2021' })
  ).resolves.toBeDefined()
})
