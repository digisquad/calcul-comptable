import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // the path to the Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
 
}
 
export default createJestConfig(config)