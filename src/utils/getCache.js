import fs from 'fs'
import path from 'path'

// Path to cache file
const PATH_TO_CACHE = 'public/cache'
const FILE_NAME = 'data.json'

const getCache = () => {
  let cacheData

  try {
    cacheData = fs.readFileSync(path.resolve(`${PATH_TO_CACHE}/${FILE_NAME}`), 'utf8')
  } catch {
    console.log('Cache data is not found')
  }

  return cacheData
}

export default getCache
