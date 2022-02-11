import { redis } from '../init/redis'

export const getCache = async key => {
  const data = await redis.get(key)

  if (!data) return null
  return JSON.parse(data)
}

export const setCache = async (key, data, expires = 0) => {
  if (expires) await redis.set(key, JSON.stringify(data), 'EX', expires)
  else await redis.set(key, JSON.stringify(data))

  console.log('Data is cached!')
}
