

const async = require('async')

// 并行 和 串行 有关联 无关联

// 串行无关联

// 注意，逻辑函数不能写箭头函数
// async.series([
//     function (callback) {// callback代表下一个函数
//         console.log(1)
//         callback(null, 'one')
//     },
//     function (callback) {
//         setTimeout(() => {
//             console.log(2)
//             callback(null, 'two')
//         }, 1000);        
//     },
//     function (callback) {
//         setTimeout(() => {
//             console.log(3)
//             callback(null, 'six')
//         }, 1000);
//     }
// ], function (err, results) {
//     console.log(err, results, 'done.')
// })

  // 并行
// async.parallel([
//     function (callback) {// callback代表下一个函数
//         console.log(1)
//         callback('break', 'one')
//     },
//     function (callback) {
//         setTimeout(() => {
//             console.log(2)
//             callback(null, 'two')
//         }, 1000);        
//     },
//     function (callback) {
//         setTimeout(() => {
//             console.log(3)
//             callback(null, 'six')
//         }, 1000);
//     }
// ], function (err, results) {
//     console.log(err, results, 'done.')
// })


// 串行有关联 瀑布流
async.waterfall([
    function (callback) {// callback代表下一个函数
        console.log(1)
        let result = 'one'
        callback(null, result)
    },
    function (param, callback) {
        setTimeout(() => {
            console.log(2)
            let result = 'two'
            callback(null, [param, result])
        }, 1000);        
    },
    function (param, callback) {
        setTimeout(() => {
            console.log(3)
            callback(null, [...param, 'six'])
        }, 1000);
    }
], function (err, results) {
    console.log(err, results, 'done.')
})