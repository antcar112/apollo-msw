// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import 'cross-fetch/polyfill'

import { disableFragmentWarnings } from 'graphql-tag'
import { client } from 'apollo'
import { server } from 'mocks'

beforeAll(() => {
  disableFragmentWarnings()
  server.listen()
})

beforeEach(() => {
  return client.cache.reset()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
