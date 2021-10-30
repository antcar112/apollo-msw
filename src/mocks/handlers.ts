import { graphql } from 'msw'

export const handlers = [
  graphql.query('getCountries', (req, res, ctx) =>
    res(
      ctx.data({
        countries: [
          {
            __typename: 'Country',
            code: 'CA',
            name: 'Canada',
            // native: 'LA',
            // // currency: null,
            // // capital: null,
            continent: { code: 'string', name: 'string' },
            // states: [],
          },
        ],
      })
    )
  ),
]
