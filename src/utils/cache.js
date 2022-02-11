const NodeCache = require('node-cache')
const cache = new NodeCache()

export const storeCache = () => {
  // Cache data
  const data = {
    number: Math.random()
  }

  const success = cache.set('data', data)

  if (success) console.log('Data is cached')
  else console.log('Error: Data is NOT cached')
}

export const getCache = () => {
  const data = cache.get('data')
  return data
}
