// 路由
var express = require('express')
var router = express.Router()

// 主页
router.post('/', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(res.body)
  res.send('...')
})

module.exports = router
