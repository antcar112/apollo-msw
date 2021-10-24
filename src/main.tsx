import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { Countries } from './Countries'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <App /> */}
    <Countries />
  </ApolloProvider>,
  document.getElementById('root')
)
