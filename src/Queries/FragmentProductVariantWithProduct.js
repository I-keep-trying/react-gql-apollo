import gql from 'graphql-tag'

import { FragmentProductVariant } from './FragmentProductVariant'

export const FragmentProductVariantWithProduct = gql`
  fragment FragmentProductVariantWithProduct on ProductVariant {
    ...FragmentProductVariant
    product {
      id
    }
  }

  ${FragmentProductVariant}
`
