import { client } from '@graphql/apollo'
import { GET_USERS_BY_UID } from '@graphql/queries'

export const getUserByUid = async (uid: string) => {
  const res = await client.query({
    query: GET_USERS_BY_UID,
    variables: {
      uid
    }
  })

  return res?.data?.users[0]
}
