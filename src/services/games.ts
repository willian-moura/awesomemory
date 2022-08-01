import {
  GET_RANDOM_ICONS,
  GET_RANKING,
  GET_USERS_BY_UID
} from '@graphql/queries'
import { SAVE_FOUND_ICONS, SAVE_GAME } from '@graphql/mutations'
import { icon } from '../types/globals'
import { client } from '@graphql/apollo'

export const getRandomIcons = async (seed = Math.random(), take = 10) => {
  const res = await client.query({
    query: GET_RANDOM_ICONS,
    variables: {
      seed: String(seed),
      take
    }
  })

  return res?.data?.list_icon_random
}

export const getRanking = async (take = 20) => {
  const res = await client.query({
    query: GET_RANKING,
    variables: {
      take
    }
  })

  return res?.data?.games
}

export const saveGameToUser = async (userUid: string, duration: number) => {
  const res = await client.mutate({
    mutation: SAVE_GAME,
    variables: {
      userId: userUid,
      duration
    }
  })

  return { id: res.data?.insert_games?.returning[0]?.id }
}

export const saveIconsToGame = async (gameId: number, icons: Array<icon>) => {
  console.log('icons', icons)
  const objects = icons.map((icon) => ({
    gameId,
    name: icon.name,
    family: icon.family
  }))

  return await client.mutate({
    mutation: SAVE_FOUND_ICONS,
    variables: {
      objects
    }
  })
}
