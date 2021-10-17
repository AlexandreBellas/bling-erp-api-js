const it = require('japa')

const Bling = require('../lib/bling').default

it.failing(
  "shouldn't create Bling entity when missing constructor argument",
  async (assert) => {
    const bling = new Bling()
    return bling
  }
)

it.failing(
  "shouldn't create Bling entity when passing API key as number",
  async (assert) => {
    const bling = new Bling(1234)
    return bling
  }
)

it.failing(
  "shouldn't create Bling entity when passing API key as object",
  async (assert) => {
    const bling = new Bling({})
    return bling
  }
)

it.failing(
  "shouldn't create Bling entity when passing API key as array",
  async (assert) => {
    const bling = new Bling({})
    return bling
  }
)
