import { render, screen, waitFor } from '@testing-library/react'
import { FC } from 'react'
import { Provider } from 'apollo'
import { server } from 'mocks'
import { graphql } from 'msw'
import { GetCountriesQuery, GetCountriesQueryVariables } from 'gql'

import { App } from './App'

const wrapper: FC = ({ children }) => <Provider>{children}</Provider>

describe('App', () => {
  test('renders learn react link', async () => {
    render(<App />, { wrapper })

    expect(screen.getByText(/Countries/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument())
  })

  test('renders other', async () => {
    server.use(
      graphql.query<GetCountriesQuery, GetCountriesQueryVariables>(
        'getCountries',
        (req, res, ctx) =>
          res(
            ctx.data({
              countries: [
                {
                  __typename: 'Country',
                  code: 'FI',
                  name: 'Finland',
                  native: 'LA',
                  currency: null,
                  capital: null,
                  continent: { __typename: 'Continent', code: 'string', name: 'string' },
                  states: [],
                },
              ],
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

    await screen.findByText(/error/i)
  })
})
