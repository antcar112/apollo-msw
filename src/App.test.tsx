import { render, screen } from '@testing-library/react'
import { FC } from 'react'
import { App } from './App'
import { Provider } from './Provider'
import { server } from './mocks/server'
import { graphql } from 'msw'

const wrapper: FC = ({ children }) => <Provider>{children}</Provider>

describe('App', () => {
  test('renders learn react link', async () => {
    render(<App />, { wrapper })
    const link = screen.getByText(/Countries/i)
    expect(link).toBeInTheDocument()

    await screen.findByText(/canada/i)
  })

  test('renders other', async () => {
    server.use(
      graphql.query('getCountries', async (req, res, ctx) =>
        res.once(
          ctx.data({
            countries: [{ __typename: 'Country', code: 'CA', name: 'Finland' }],
          })
        )
      )
    )

    render(<App />, { wrapper })
    const link = screen.getByText(/loading.../i)
    expect(link).toBeInTheDocument()

    await screen.findByText(/finland/i)
  })

  test('renders error', async () => {
    server.use(
      graphql.query('getCountries', async (req, res, ctx) =>
        res.once(
          ctx.errors([
            {
              message: 'Not authorized',
            },
          ])
        )
      )
    )

    render(<App />, { wrapper })
    const link = screen.getByText(/loading.../i)
    expect(link).toBeInTheDocument()

    await screen.findByText(/error/i)
  })
})
