import chance from 'chance'

const seed = chance()

export default <T>(value: T, likelihood = 50): T | null => {
  return seed.bool({ likelihood }) ? value : null
}
