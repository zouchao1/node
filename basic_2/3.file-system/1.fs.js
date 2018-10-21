

const fs = require('fs')

// 创建目录
// fs.mkdir('./logs', (err) => {
//     console.log(err, 'done.')
// })
// fs.mkdirSync('./logs')
// console.log(1)


// 创建文件并写入内容 会重写
// fs.writeFile('./logs/log.txt', 'Hello World', (err) => {
//     console.log('done')
// })
// 追加
// fs.appendFile('./logs/log.txt', 'Hello World', (err) => {
//     console.log('done')
// })


// 读取文件的内容
// fs.readFile('./logs/log.txt', 'utf8',(err, data) => {
//     console.log(err, data)
//     console.log('done')
// })

// 删除文件和目录
// fs.unlink('./logs/log.txt', (err) => {
//     console.log('done')
// })
// fs.rmdir('./logs', (err) => {
//     console.log('done')
// })

// 重命名

// fs.rename('./logs/log.txt', './logs/txt.log', (err) => {
//     if (err) console.log(err)
//     console.log('done')

// })

// 批量创建

//for (let i = 0; i < 10; i++) {
//  fs.writeFileSync(`./logs/txt-${i+1}.log`)
//}

// 读取目录内容

   fs.readdir('./logs', (err, files) => {
       files.forEach(p => {
           let path = './logs/' + p
           fs.stat( path, (err, stats) => {
               console.log(stats)
               if (stats.isFile()) {
                   fs.unlinkSync(path)
               }else {
                   fs.rmdirSync(path)
               }
           })
       })
   })

// 监听文件变化

// fs.watch('./logs/log.txt', () => {
//     console.log('change')
// })
// fs.watchFile('./logs/log.txt', () => {
//     console.log('change')
// })

