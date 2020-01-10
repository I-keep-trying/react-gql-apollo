import gql from 'graphql-tag'

export const FragmentUserError = gql`
  fragment FragmentUserError on UserError {
    field
    message
  }
`
