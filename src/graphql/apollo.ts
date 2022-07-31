import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export let client: ApolloClient<any>

const createApolloClient = () => {
  client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_DEFAULT_URI_APOLLO,
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
      },
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
  })
  return client
}

export const initializeApollo = () => {
  return createApolloClient()
}
