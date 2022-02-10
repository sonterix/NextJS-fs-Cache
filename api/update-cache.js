import getCache from '../utils/cacheFunc'

export default async function updateCache(req, res) {
  await getCache()

  res.statusCode = 200
  res.json({ status: 'success' })
}
