import type {Config} from 'jest';
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  moduleNameMapper: {'^@/components/(.*)$': '<rootDir>/src/app/components/$1'},
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],

};

export default createJestConfig(config);
