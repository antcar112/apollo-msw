import { ApolloProvider } from '@apollo/client'
import { FC } from 'react'

import { client } from './client'

export const Provider: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
