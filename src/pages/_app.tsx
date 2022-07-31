import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import BackgroundImage from '@components/atoms/BackgroundImage'
import styles from './app.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { GameContextProvider } from '@contexts/GameContextData'
import { ApolloProvider } from '@apollo/client'
import { AuthContextProvider } from '@contexts/AuthContextData'
import { initializeApollo } from '@graphql/apollo'

library.add(fas, fab, far)

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <GameContextProvider>
          <div className={styles.container}>
            <div className={styles.container__component}>
              <Component {...pageProps} />
            </div>
            <BackgroundImage />
          </div>
        </GameContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
