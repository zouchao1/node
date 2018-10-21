
const express = require('express')

const PATH = require('path')

const Router = express.Router

const router = new Router()


router.get('/', (req, res) => {
    res.sendFile(PATH.resolve(__dirname , '../views/index.html'))
})

router.get('/list', (req, res) => {
    res.sendFile(PATH.resolve(__dirname , '../views/list.html'))
})

// router.get('/api', (req, res) => {
//     res.send('index api')
// })



module.exports = router