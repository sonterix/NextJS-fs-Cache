const fs = require('fs')

export default async function updateCache(req, res) {
  const date = JSON.stringify(Date())

  fs.writeFileSync('public/cache/data.json', date)

  res.statusCode = 200
  res.json({ status: 'success', date })
}
