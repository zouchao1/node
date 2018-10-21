

const util = {
    sum (x, y) {
        return x + y
    }
}
// module.exports 默认值


// module.exports.sum = util.sum

// console.log(module.exports === exports) // true

// module.exports = util
// exports = util

// exports.sum = util.sum