import chance from 'chance'

const seed = chance()

export default () => seed.pickone(['pc', 'un', 'cx'])
