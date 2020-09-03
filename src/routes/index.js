// 路由
var express = require('express')
var router = express.Router()
const md5 = require('blueimp-md5')
var UserModel = require('../db/model').UserModel
var DetailModel = require('../db/model').DetailModel

// 主页
router.post('/', function (req, res, next) {
  res.send('home page')
})

/**
 * 用户注册逻辑
 * 1. 用户名不能为空
 * 2. 密码不能为空
 * 3. 两次输入密码必须一致
 * 4. 用户是否已经被注册了（数据库查询）
 */

router.post('/register', function (req, res, next) {
  // 读取请求参数数据
  const { username, password, repassword } = req.body
  console.log(req.body)

  // 用户名是否为空
  if (!username) {
    res.send({ code: 1, message: '用户名不能为空' })
  }
  // 密码是否为空
  if (!password) {
    res.send({ code: 1, message: '密码不能为空' })
  }
  // 两次输入的密码是否相同
  if (password !== repassword) {
    res.send({ code: 3, message: '两次输入的密码不一致' })
  }
  // 用户名是否已经被注册
  UserModel.findOne({
    username: username
  }).then(function (user) {
    if (user) {
      res.send({ code: 1, message: '此用户已存在' })
    } else {
      // 未注册保存到数据库中
      // eslint-disable-next-line handle-callback-err
      new UserModel({ username, password: md5(password) }).save(function (error, user) {
      // 生成一个cookie （userid: user._id），并且交给浏览器保存
        res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })
        // 返回包含user的json数据
        const data = { username, _id: user._id } // 响应数据中不要携带密码
        res.send({ code: 0, data, message: '用户注册成功' })
      })
    }
  })
})

/**
* 用户登录
*/
router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  // 根据username和password查询数据库users，如果没有，返回错误提示信息， 如果有，返回登录成功信息
  // eslint-disable-next-line handle-callback-err
  UserModel.findOne({ username, password: md5(password) }, function (err, user) {
    if (user) {
      // 登录成功，生成一个cookie(userid: user._id), 并交给浏览器保存
      res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })
      res.send({ code: 0, data: user })
    } else {
      res.send({ code: 1, message: '用户名或密码不正确' })
    }
  })
})

router.post('/detail', function (req, res, next) {
  const {time, tag, category, money, remark} = req.body
  const newDetail = {time, tag, category, money, remark}
  DetailModel.create(newDetail).then(res => {
    res.send(res)
  }).catch(error => {
    res.send(error.message)
  })
})
module.exports = router
