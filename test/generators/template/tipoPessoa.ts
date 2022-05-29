import chance from 'chance'

const seed = chance()

export default () => seed.pickone(['F', 'J', 'E'])
