

const http = require('http')
const fs = require('fs-extra')

http.createServer((req, res) => {

    if ( req.url === '/' ) {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf8' })
        res.end(fs.readFileSync('./index.html'))
    }else if ( req.url === '/boot.min.js' ) {
        res.writeHead(200, { 'content-encoding': 'gzip' })
        res.end(fs.readFileSync('./boot.min.css.gz'))
    }else {
        res.end('gun')
    }


}).listen(3000)