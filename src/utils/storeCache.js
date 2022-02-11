import fs from 'fs'
import path from 'path'

// Path to cache file
const PATH_TO_CACHE = 'public/cache'
const FILE_NAME = 'data.json'
const FULL_PATH = path.resolve(`${PATH_TO_CACHE}/${FILE_NAME}`)

const storeCache = async () => {
  // Cache data
  const data = {
    date: Math.random()
  }

  // Check or create cache folder
  try {
    fs.readdirSync(PATH_TO_CACHE)
  } catch {
    fs.mkdirSync(PATH_TO_CACHE)
  }

  // Caching the data
  try {
    fs.writeFileSync(FULL_PATH, JSON.stringify(data), 'utf8')
    console.log(`Data is cached at ${PATH_TO_CACHE}`)
  } catch (error) {
    console.log('Error: Data is NOT cached')
    console.error(error)
  }
}

export default storeCache
