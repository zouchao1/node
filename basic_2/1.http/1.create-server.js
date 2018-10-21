
const http = require('http')

// 招聘服务员 并培训
// @param request 客户端的请求信息
const router = (request, response) => { // 只要接收到请求就会触发
    let { url, method, headers } = request
    // url 请求的路径， 主要用于判断之后分流请求
    // method  请求方式
    // headers 请求头信息，里面有重要的cookie。。。。。。。。。
    // console.log(url, method ,headers)

    // write , end, writeHead, setHeader, statusCode

  
    // response.statusCode = 200
    // response.setHeader("Content-type","text/html")

    response.writeHead(200, { 'Content-type': 'text/html; charset=utf8' })

    response.write('<h1>Hello World</h1>')// 写入响应内容 (string)
    response.write('<h3>This is a Node.js example</h3>')// 写入响应内容 (string)
    response.write('<script>alert("haha")</script>')// 写入响应内容 (string)
    response.end('<p>response.end send</p>')
}

// 开店
let server = http.createServer(router)

let port = 3000
let hostname = '10.9.189.99'
// 开门
server.listen(port, hostname, () => { // 监听成功后执行
    console.log(`server is listening at port:${port}`)
})