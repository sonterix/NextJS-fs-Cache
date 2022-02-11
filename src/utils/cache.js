const NodeCache = require('node-cache')

export const initCache = () => {
  const cache = new NodeCache()
  return cache
}

export const storeCache = cache => {
  // Cache data
  const data = {
    number: Math.random()
  }

  const success = cache.set('data', data)

  if (success) console.log('Data is cached')
  else console.log('Error: Data is NOT cached')
}

export const getCache = cache => {
  const data = cache.get('data')
  return data
}
