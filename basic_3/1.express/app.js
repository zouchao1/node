

const PATH = require('path')
const express = require('express')
const app = express() // 可以创建一个express应用
const bodyParser = require('body-parser')

// 中间件  就是在创建应用，和启动应用之间 根据任务需求再进行其他的操作


app.use((req, res, next) => {
    console.log('抽风。。。。。')
    next()
})

// 解析form-data数据
app.use(bodyParser.urlencoded({ extended: false }))
// 解析request payloads
app.use(bodyParser.json())

//  如果我们请求的路径是以static开头的，express就认为这是再请求静态资源，express就会将其导向到public中
// app.use(express.static('public'))
app.use('/static', express.static('public'))

const index = require('./routes/index')
const api = require('./routes/api')


app.use('/api', api)

app.use('/', index)


// 处理404 
app.use((req, res, next) => {
    res.send('404')
    next()// 继续往下走。。。
})


//   /api/student/info
// app.get('/api/student/info', (req, res) => {
//     console.log('有人请求了')
//     res.json({
//         name: '二狗子',
//         age: 16
//     })
// })
// app.post('/api/student/info', (req, res) => {
//     console.log('有人请求了')
//     res.json({
//         name: '二狗子',
//         age: 16
//     })
// })


// 自定义中间件 处理了视图
// app.use('/', (req, res) => {
//     // res.send('Hello World')
//     // res.sendFile(__dirname + '/package.json')
//     // res.send({a: 1, b: 2})
//     // res.header('Content-Type', 'application/json')
//     // res.send({a: 1, b: 2})

//     // res.write()
//     // res.end('123')
//     res.sendFile(PATH.resolve(__dirname, './views/index.html'))
// })




app.listen(3000, () => {
    console.log(`server is listening`)
})