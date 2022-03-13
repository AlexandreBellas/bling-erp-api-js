import { bling, generators } from '../config/bling'

jest.setTimeout(60000)

const table = Object.keys(generators)

test.each(table)(
  'should create an entity of type "%s" when calling `.create()` method',
  async (name) => {
    await expect(
      bling[name]().create(generators[name]())
    ).resolves.toBeDefined()
  }
)
