import styles from './index.module.scss'
import Spin from '@components/molecules/Spin'
import RankingItem from '@components/molecules/RankingItem'
import { useEffect, useState } from 'react'
import { getRanking } from '../../../services/games'
import { initializeApollo } from '@graphql/apollo'

export default function RankingList() {
  initializeApollo()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const data = await getRanking()
      setData(data)
    } catch (e) {
      setData([])
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Spin />
  }

  return (
    <div className={styles.container}>
      {data.map((game: any, index: number) => (
        <RankingItem
          key={`game-${game?.id}`}
          position={index + 1}
          item={game}
        />
      ))}
    </div>
  )
}
