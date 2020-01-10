import gql from 'graphql-tag'

 const QueryShop = gql`
  query {
    shop {
      currencyCode
      description
      name
      primaryDomain {
        host
        sslEnabled
        url
      }
    }
  }
`
export default QueryShop