/* eslint-disable no-console */
import { fsWriteFile } from '../utils/fs'

const fs = require('fs')

const getCache = async () => {
  // Path to cache file
  const pathToSave = 'public/cache'
  // Cache data
  const data = {
    date: Date()
  }

  // Check or create cache folder
  try {
    fs.readdirSync(pathToSave)
  } catch {
    fs.mkdirSync(pathToSave)
  }

  // Caching the data
  try {
    await fsWriteFile(`${pathToSave}/data.json`, JSON.stringify(data))
    console.log(`Data is cached at ${pathToSave}`)
  } catch (error) {
    console.log(`Data is NOT cached. ${error}`)
  }

  return true
}

export default getCache
