import { GET_FOUND_ICONS_BY_USER, GET_USERS_BY_UID } from '@graphql/queries'
import { client } from '@graphql/apollo'

export const getUserByUid = async (uid: string) => {
  const res = await client.query({
    query: GET_USERS_BY_UID,
    variables: {
      uid
    }
  })

  return res?.data?.users[0]
}

export const getFoundIconsByUser = async (uid: string) => {
  const res = await client.query({
    query: GET_FOUND_ICONS_BY_USER,
    variables: {
      uid
    }
  })

  return res?.data?.found_icons
}
