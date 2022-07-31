import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation ($userId: String!, $userEmail: String, $userName: String) {
    insert_users(
      objects: [
        {
          id: $userId
          email: $userEmail
          lastSeen: "now()"
          userName: $userName
        }
      ]
      on_conflict: {
        constraint: users_pkey
        update_columns: [lastSeen, email, userName]
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

export const SAVE_GAME = gql`
  mutation ($userId: String!, $duration: bigint) {
    insert_games(
      objects: [{ userId: $userId, duration: $duration, createdAt: "now()" }]
      on_conflict: {
        constraint: games_pkey
        update_columns: [duration, createdAt]
      }
    ) {
      returning {
        id
      }
    }
  }
`

export const SAVE_FOUND_ICONS = gql`
  mutation ($objects: [found_icons_insert_input!] = {}) {
    insert_found_icons(
      objects: $objects
      on_conflict: {
        constraint: found_icons_pkey
        update_columns: [name, family, createdAt]
      }
    ) {
      affected_rows
    }
  }
`
