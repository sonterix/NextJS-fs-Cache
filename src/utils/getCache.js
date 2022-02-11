import fs from 'fs'
import path from 'path'

// Path to cache file
const PATH_TO_CACHE = 'public/cache'
const FILE_NAME = 'data.json'
const FULL_PATH = path.resolve(`${PATH_TO_CACHE}/${FILE_NAME}`)

const getCache = async () => {
  let cacheData

  try {
    cacheData = fs.readFileSync(FULL_PATH, 'utf8')
  } catch {
    console.log('Cache data is not found')
  }

  return cacheData
}

export default getCache
