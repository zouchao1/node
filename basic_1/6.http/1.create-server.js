
const http  = require('http')

const port = 3000

const server = http.createServer(( request, response ) => {
    response.writeHead(200, { 'Content-type': 'text/html' })
    response.end('hello<br/>world')
})

server.listen(port, () => {
    console.log(`server is listening at http://localhost:${port} .....`)
})