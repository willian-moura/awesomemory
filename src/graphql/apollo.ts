import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_DEFAULT_URI_APOLLO,
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret':
          '2BJ7E2bAFiQMnKfhUiWcYXlgw2e1OnkFcrDS8I7bScktzjQ13xhXck0vu3UUG4KE'
      },
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
  })
}
