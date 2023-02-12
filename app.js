const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()

app.use(express.static('./build'))

const options = {
  key: fs.readFileSync('./https/ngix/9278507_sunyesheng.cn.key.crt'),
  cert: fs.readFileSync('./https/ngix/9278507_sunyesheng.cn.crt'),
}

const server = https.createServer(options, app)

server.listen(443, () => {
  console.log('https://127.0.0.1:443')
})
