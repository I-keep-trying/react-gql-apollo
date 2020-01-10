import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import './style.css'

const SHOPIFY_BASE_URL = `https://dev-store9.myshopify.com/api/graphql`

const httpLink = new HttpLink({
  uri: SHOPIFY_BASE_URL,
  headers: {
    'X-Shopify-Storefront-Access-Token': `${process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN}`,
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      alert(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    alert(`[Network error]: ${networkError}`)
  }
})

const link = ApolloLink.from([errorLink, httpLink])

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
