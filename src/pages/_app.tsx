import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import BackgroundImage from '@components/atoms/BackgroundImage'
import styles from './app.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { GameContextProvider } from '@contexts/GameContextData'

library.add(fas, fab)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameContextProvider>
      <div className={styles.container}>
        <div className={styles.container__component}>
          <Component {...pageProps} />
        </div>
        <BackgroundImage />
      </div>
    </GameContextProvider>
  )
}

export default MyApp