

const EventEmitter = require('events')
// on 绑定事件  emit 触发事件  once 绑定一次性事件
// console.log(EventEmitter.prototype)

// var event = { ...EventEmitter.prototype }

// event.on('HA', (symbol) => {
//     console.log('hahahahah' + symbol)
// })

// event.emit('HA', '!')


// class MyEventEmitter extends EventEmitter {}

// var event = new MyEventEmitter()

// event.on('HA', (symbol) => {
//     console.log('hahahahah' + symbol)
// })

// event.emit('HA', '!')


// 发布订阅工具类 继承了EventEmitter， 所以实例也就是发布订阅工具拥有绑定事件和触发事件的能力
class Tom extends EventEmitter {}
// 发布订阅工具
let tom = new Tom()
// 发布者
class Landlord {
    constructor () {
        this.rent = 50
    }
    increaseRent () {
        this.rent += 5
        // 发布一个事件 （触发了发布订阅工具的事件）
        tom.emit('rentIncrease')
    }
}
let landlord = new Landlord()
// 订阅者类
class Listener {
    constructor (name) {
        this.name = name
        this.computeMoney() // 计算自己有多少钱
        // 订阅 给发布订阅工具绑定事件，事件的处理程序其实就是订阅函数
        tom.on('rentIncrease', () => { 
            this.computeMoney()
            this.render() 
        })
    }
    computeMoney () {
        this.money = 500 - (landlord.rent / 2)
    }
    render () { // 输出自己有多少钱
        let { name, money } = this
        console.log(`${name}有${money}元钱`)
    }

}
let jack = new Listener('Jack')
let rose = new Listener('Rose')
jack.render()
rose.render()
// 发布者执行触发发布的条件
landlord.increaseRent()

