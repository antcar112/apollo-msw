import { render, screen } from '@testing-library/react'
import { FC } from 'react'
import { App } from './App'
import { Provider } from './Provider'

const wrapper: FC = ({ children }) => <Provider>{children}</Provider>

test('renders learn react link', async () => {
  render(<App />, { wrapper })
  const link = screen.getByText(/Countries/i)
  expect(link).toBeInTheDocument()

  await screen.findByText(/canada/i)
})
