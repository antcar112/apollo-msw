import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
})

export const client = new ApolloClient({ cache, link })
