import chance from 'chance'

const seed = chance()

export default () => seed.pickone(['0', '1', '2', '3', '4', '5', '6', '7', '8'])
