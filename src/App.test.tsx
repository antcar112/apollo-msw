import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { FC } from 'react'
import { App } from './App'

const wrapper: FC = ({ children }) => <MockedProvider>{children}</MockedProvider>

test('renders learn react link', () => {
  render(<App />, { wrapper })
  const link = screen.getByText(/Countries/i)
  expect(link).toBeInTheDocument()
  screen.debug()
})
