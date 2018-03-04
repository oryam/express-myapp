const express = require('express')
const app = express()

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, ip, 511, function () {
  console.log(`Example app listening on port ${ip}:${port}!`)
})
