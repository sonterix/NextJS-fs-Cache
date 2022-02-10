import getCache from '../../utils/cacheFunc'

const updateCache = async (req, res) => {
  await getCache()

  res.statusCode = 200
  res.json({ status: 'success' })
}

export default updateCache
