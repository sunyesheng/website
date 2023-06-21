const express = require('express')
const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./https/ngix/9278507_sunyesheng.cn.key.crt'),
  cert: fs.readFileSync('./https/ngix/9278507_sunyesheng.cn.crt'),
}

const httpApp = express()
const httpsApp = express()

httpsApp.use(express.static('./build'))
// httpsApp.use(express.static('./threejs'))

const server = https.createServer(options, httpsApp)

httpApp.get('*', (req, res, next) => {
  let host = req.headers.host
  host = host.replace(/\:\d+$/, '') // Remove port number
  res.redirect(`https://${host}${req.path}`)
})

httpApp.listen(80, () => {
  console.log('https://127.0.0.1')
})

server.listen(443, () => {
  console.log('https://127.0.0.1:443')
})
