require('dotenv').config()

const { Bling } = require('../../lib/bling')
const testApiKey = process.env.BLING_API_KEY

jest.setTimeout(60000)

test("it shouldn't create a Bling entity when missing constructor argument", async () => {
  expect(() => {
    const bling = new Bling()
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("it shouldn't create a Bling entity when passing API key as number", async () => {
  expect(() => {
    const bling = new Bling(1234)
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("it shouldn't create a Bling entity when passing API key as object", async () => {
  expect(() => {
    const bling = new Bling({})
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("it shouldn't create a Bling entity when passing API key as array", async () => {
  expect(() => {
    const bling = new Bling([])
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("it shouldn't create a Bling entity when passing API key as null", async () => {
  expect(() => {
    const bling = new Bling(null)
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("it shouldn't create a Bling entity when passing API key as undefined", async () => {
  expect(() => {
    const bling = new Bling(undefined)
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test('it should create a Bling entity when passing a proper API key', async () => {
  expect(() => {
    const bling = new Bling(testApiKey)
    return bling
  }).not.toThrow("The API key wasn't correctly provided for Bling connection.")
})
