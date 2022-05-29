import chance from 'chance'

const seed = chance()

export default () => seed.pickone(['1', '2', '9'])
