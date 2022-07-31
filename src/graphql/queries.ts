import { gql } from '@apollo/client'

export const GET_USERS_BY_UID = gql`
  query getUser($uid: String!) {
    users(where: { id: { _eq: $uid } }) {
      id
      userName
      email
    }
  }
`
