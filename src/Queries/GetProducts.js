import gql from 'graphql-tag'
import {FragmentProduct} from './FragmentProduct'

export const GET_PRODUCTS = gql`
  {
    products(first: 10) {
      edges {
        node {
...FragmentProduct
        }
      }
    }
  }
  ${FragmentProduct}
`

// export default GET_PRODUCTS
