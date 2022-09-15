const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
  const data = fs.readFileSync('./assests/index.txt', 'utf-8')
  res.end(`new server`)
})

server.listen(4000, ()=>{
    console.log(`server is running on port 4000`)
})
