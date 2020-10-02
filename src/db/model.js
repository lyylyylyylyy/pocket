/*
1. 连接数据库
    1.1 引入mongoose
    1.2 连接指定数据库
    1.3 获取连接对象
    1.4 绑定连接完成的监听
2. 定义出特定集合的model并向外暴露
    2.1 定义Schema，描述文档结构
    2.2 定义model，与集合对应，可以操作集合
    2.3 向外暴露model
*/

// 连接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lyy:lyy@yelpcamp-itfym.mongodb.net/pocket?retryWrites=true&w=majority', { useNewUrlParser: true }, (err, res) => {
  if (!err) {
    console.log(res)
  }
})
const conn = mongoose.connection

conn.on('connected', () => {
  console.log('db connect successfully!')
})

// 定义特定集合的model并向外暴露
// 定义schema
const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  header: {type: String},
  info: {type: String}
})

// 定义model
const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel

// 账本数据库
// const pocketModel = mongoose.Schema({
//   tag: {type: String, required: true}
// })

// const PocketModel = mongoose.model('pocket', pocketModel)

// exports.PocketModel = PocketModel

const detailSchema = mongoose.Schema({
  time: {type: String, required: true},
  tag: {type: String, required: true},
  category: {type: String, required: true},
  money: {type: String, required: true},
  remark: {type: String, required: true},
  userId: {type: String, required: true},
  content_id: {
    type: mongoose.Schema.Types.ObjectId,
    $ref: 'detail'
  }
})

const DetailModel = mongoose.model('detail', detailSchema)

exports.DetailModel = DetailModel
