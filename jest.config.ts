import type { Config } from 'jest'

const config: Config = {
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
    '/coverage/'
  ],
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  maxWorkers: 1,
  maxConcurrency: 2,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['/coverage/', 'jest.config.ts', '/lib/'],
  coverageDirectory: './coverage'
}

export default config
