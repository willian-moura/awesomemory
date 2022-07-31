import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation ($userId: String!, $userEmail: String, $userName: String) {
    insert_users(
      objects: [
        {
          id: $userId
          email: $userEmail
          last_seen: "now()"
          userName: $userName
        }
      ]
      on_conflict: {
        constraint: users_pkey
        update_columns: [last_seen, email, userName]
      }
    ) {
      returning {
        id
        email
        userName
      }
    }
  }
`
