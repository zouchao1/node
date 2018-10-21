

const fs = require('fs')

let readStream = fs.createReadStream('./1.mp4')
let writeStream = fs.createWriteStream('./2.mp4')

// console.time('test')

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// readStream.on('end', (chunk) => {
//     console.log('done.')
//     console.timeEnd('test')
// })

readStream.pipe(writeStream)
