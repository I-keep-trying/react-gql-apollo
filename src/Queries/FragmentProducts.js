import gql from 'graphql-tag'

export const PRODUCT_FRAGMENT = gql`
  fragment product on Product {
    id
    title
    description
    onlineStoreUrl
    images(first: 3) {
      edges {
        node {
          id
          originalSrc
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

