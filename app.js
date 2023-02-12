const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()

const options = {
  pfx: fs.readFileSync('./https/9278507_sunyesheng.cn.pfx'),
  passphrase: '50wtktr9',
}

const server = https.createServer(options, app)

app.use(express.static('./build'))

server.listen(80, () => {
  console.log('http://127.0.0.1')
})
