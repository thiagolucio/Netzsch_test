import type {Config} from 'jest';
import nextJest from 'next/jest.js'
import {defaults} from 'jest-config';

const createJestConfig = nextJest({
  dir: './',
})

module.exports = {
  "testEnvironment": "jsdom"
}

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
