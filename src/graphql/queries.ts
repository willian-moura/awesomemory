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

export const GET_RANDOM_ICONS = gql`
  query getUser($seed: seed_float!, $take: Int) {
    list_icon_random(args: { seed: $seed }, limit: $take) {
      name
      family
    }
  }
`

export const GET_RANKING = gql`
  query getGames($take: Int) {
    games(order_by: { duration: asc }, limit: $take) {
      id
      duration
      createdAt
      user {
        userName
      }
    }
  }
`

export const GET_FOUND_ICONS_BY_USER = gql`
  query getFoundIcons($uid: String!) {
    found_icons(where: { game: { userId: { _eq: $uid } } }, distinct_on: name) {
      name
      family
      createdAt
    }
  }
`
