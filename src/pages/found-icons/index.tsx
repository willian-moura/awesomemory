import type { NextPage } from 'next'
import styles from './index.module.scss'
import Panel from '@components/atoms/Panel'
import AuthMiddleware from '../../midlewares/auth'
import PageTitle from '@components/molecules/PageTitle'
import { getFoundIconsByUser } from '../../services/users'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@contexts/AuthContextData'
import FoundIcons from '@components/organisms/FoundIcons'
import Spin from '@components/molecules/Spin'

const FoundIconsPage: NextPage = () => {
  const { user } = useContext(AuthContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const data = await getFoundIconsByUser(user?.id)
      setData(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AuthMiddleware>
      <div className={styles.container}>
        <Panel hFull>
          <div className={'panel'}>
            <PageTitle>My found icons</PageTitle>
            <div className={'found-icons'}>
              {loading ? <Spin /> : <FoundIcons icons={data} />}
            </div>
          </div>
        </Panel>
      </div>
    </AuthMiddleware>
  )
}

export default FoundIconsPage
