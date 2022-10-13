const http = require ('http')
const ws = require('ws')
const server = http.createServer((req, res) => {
  res.end('servidor em funcionamento...')
})

const serverSocket = new ws.Server({server})

serverSocket.on('headers', (headers, req) => {
  //vamos apenas exibir, por enquanto
  console.log(headers)
})

serverSocket.on('connection', (ws, req) => {
  ws.send("Hello, Websocket!")
  ws.on('message', (msg) => {
    console.log(msg.toString())
  })
})

server.listen(3000)