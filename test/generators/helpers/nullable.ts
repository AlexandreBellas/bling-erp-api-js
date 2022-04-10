import chance from 'chance'

const seed = chance()

export default (value: unknown, likelihood = 50) => {
  return seed.bool({ likelihood }) ? value : null
}
