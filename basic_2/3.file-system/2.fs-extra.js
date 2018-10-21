
const fs = require('fs-extra')

// fs.writeFile('./logs/log.txt', 'Hello World', (err) => {
//     fs.readFile('./logs/log.txt', (err) => {
        
//     })
// })

let promise = fs.readFile('./logs/log.txtt')
promise.then((data) => {
    console.log(data + '')
}).catch((err) => {
    console.log(err)
})

// 假设希望创建完成后，再执行读取