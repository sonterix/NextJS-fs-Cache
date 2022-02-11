import fs from 'fs'
import path from 'path'

const CACHE_PATH = path.resolve('public/cache/data.json')

const getCache = async () => {
  let cachedData

  // try {
  //   const existingData = fs.readFileSync(CACHE_PATH, 'utf8')
  //   cachedData = JSON.parse(existingData)
  // } catch (error) {
  //   console.log('Cache not found')
  // }

  if (!cachedData) {
    const data = Math.random()

    try {
      fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf8')
      console.log(`Data is cached at ${CACHE_PATH}`)
    } catch (error) {
      console.log('Error: Data is NOT cached')
      console.error(error)
    }

    cachedData = data
  }

  return cachedData
}

export default getCache
