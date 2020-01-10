import gql from 'graphql-tag'

export const FragmentCheckoutUserError = gql`
  fragment FragmentCheckoutUserError on CheckoutUserError {
    field
    message
    code
  }
`
