import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Country: {
      keyFields: ['code'],
    },
    Continent: {
      keyFields: ['code'],
    },
    State: {
      keyFields: ['code'],
    },
  },
})

const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
})

export const client = new ApolloClient({ cache, link })
