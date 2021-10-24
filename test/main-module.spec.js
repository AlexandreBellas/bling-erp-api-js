/* eslint-disable no-undef */
const { Bling } = require('../lib/bling')

jest.setTimeout(10000)

test("shouldn't create Bling entity when missing constructor argument", async () => {
  expect(() => {
    const bling = new Bling()
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("shouldn't create Bling entity when passing API key as number", async () => {
  expect(() => {
    const bling = new Bling(1234)
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("shouldn't create Bling entity when passing API key as object", async () => {
  expect(() => {
    const bling = new Bling({})
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})

test("shouldn't create Bling entity when passing API key as array", async () => {
  expect(() => {
    const bling = new Bling([])
    return bling
  }).toThrow("The API key wasn't correctly provided for Bling connection.")
})
