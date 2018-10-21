

const express = require('express')

const PATH = require('path')

const Router = express.Router

const router = new Router()
// '/api'

router.get('/', (req, res) => {
    res.json({ message: 'Hello' })
})


// /api/student/info


// router.get('/student/info', (req, res, next) => {
//     let info = { name: '二狗子', age: 18 }
//     next(info)
// }, (params, req, res, next) => {
//     res.json(params)
// })


router.get('/student/info',  ( req, res, next) => {
    let info = { name: '二狗子', age: 18 }
    res.json(info)
})



// router.get('/goodinfo/:id/:age',  ( req, res, next) => {
//     res.json({ data :req.params })
// })



router.all('/goodinfo',  ( req, res, next) => {
    console.log(req.body)
    res.json({ data : req.body })
})








module.exports = router