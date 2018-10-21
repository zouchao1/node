
const fs = require('fs')
console.time('test')
fs.readFile('./1.mp4', (err, data) => {
    fs.writeFileSync('./2.mp4')
    console.timeEnd('test') // 0.38s 5% 
})