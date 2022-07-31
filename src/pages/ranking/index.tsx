import type { NextPage } from 'next'
import styles from './index.module.scss'
import Panel from '@components/atoms/Panel'
import AuthMiddleware from '../../midlewares/auth'
import PageTitle from '@components/molecules/PageTitle'
import ClientOnly from '@components/atoms/ClientOnly'
import RankingList from '@components/organisms/RankingList'

const Ranking: NextPage = () => {
  return (
    <AuthMiddleware>
      <div className={styles.container}>
        <Panel hFull>
          <div className={'panel'}>
            <PageTitle>Ranking of best games</PageTitle>
            <div className={'ranking'}>
              <RankingList />
            </div>
          </div>
        </Panel>
      </div>
    </AuthMiddleware>
  )
}

export default Ranking
