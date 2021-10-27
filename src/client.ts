import { ApolloClient, ApolloClientOptions, InMemoryCache } from '@apollo/client'

const clientOptions: ApolloClientOptions<unknown> = {
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
}

export const client = new ApolloClient(clientOptions)
