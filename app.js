const geoip = require('geoip-lite');

const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  const geo = geoip.lookup(ip);
  const page = `ip: ${ip}, geo: ${JSON.stringify(geo.country)}`

  res.send(page)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})