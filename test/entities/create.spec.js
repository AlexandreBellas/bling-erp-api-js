import { bling, defaultBeforeEach, generators } from '../config/bling'

jest.setTimeout(60000)

const table = Object.keys(generators)
const runs = 3

beforeEach(() => {
  return defaultBeforeEach()
})

for (let i = 0; i < runs; i++) {
  test.each(table)(
    'should create an entity of type "%s" when calling `.create()` method',
    async (name) => {
      const entity = generators[name]()

      try {
        const promise = await bling[name]().create(entity)

        expect(promise).toBeDefined()
        expect(promise).toBeTruthy()
      } catch (err) {
        console.log(
          `name: ${name}, ${JSON.stringify(entity)}, ${JSON.stringify(
            err.data.errors
          )}`
        )
        expect(false).toBe(true)
      }
    }
  )
}
