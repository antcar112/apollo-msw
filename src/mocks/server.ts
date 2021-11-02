import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import { rest } from 'msw'
import { gql } from '@apollo/client'
import faker from 'faker'

import { buildClientSchema, execute } from 'graphql'
import { addMocksToSchema } from '@graphql-tools/mock'

import introspection from './introspection.json'

// Setup requests interception using the given handlers.
// export const server = setupServer(...handlers)

// Build a schema using the introspection
const schema = buildClientSchema(introspection as any)

// Stub out our schema with fake data
const mockedSchema = addMocksToSchema({
  schema,
  mocks: {
    Country: () => ({
      name: faker.address.country(),
      code: faker.address.countryCode(),
    }),
  },
  preserveResolvers: false,
})

// export const server = setupServer(...handlers)
export const server = setupServer(
  rest.post<{ query: string; variables: Record<string, unknown> }>(
    'https://countries.trevorblades.com/',
    async (req, res, ctx) => {
      const result = await execute(
        mockedSchema,
        gql`
          ${req.body.query}
        `,
        null,
        null,
        req.body.variables
      )

      return res(ctx.json(result))
    }
  )
)
