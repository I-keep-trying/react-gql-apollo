import gql from 'graphql-tag'

import {FragmentProductVariant} from './FragmentProductVariant'

export const FragmentProduct = gql`
  fragment FragmentProduct on Product {
    id
    createdAt
    updatedAt
    descriptionHtml
    description
    handle
    productType
    title
    vendor
    publishedAt
    onlineStoreUrl
    options {
      name
      values
    }
    images(first: 10) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          src
          altText
        }
      }
    }
    variants(first: 10) {
      edges {
        cursor
        node {
          ...FragmentProductVariant
        }
      }
    }
  }

  ${FragmentProductVariant}
`
//export default FragmentProduct
