/**
 * 应用程序的启动（入口）文件
 */

 // 加载express模块
 var express = require('express');
 // 加载模块处理模版
 var swig = require('swig');
 // 加载数据库模块
 // var mongoose = require('mongoose');
 // 加载body-parser，用来处理post提交过来的数据
 var bodyParser = require('body-parser');

 var cookieParser = require('cookie-parser');  
 // 创建app应用，NodeJSHttp.createserver()
 var app = express();
 
 
 // var usersRouter = require('./routes/users');
 
 // 设置静态文件托管
 // 当用户访问的url以/public开始，那么直接返回__dirname + '/public'下的文件
 app.use('/public', express.static(__dirname + '/public'));
 app.use(cookieParser()); 
 // 配置应用模板
 // 定义当前应用所使用的模板引擎
 // 第一个参数：模板引擎的名称，同时也是模板引擎文件的后缀，第二个参数表示用于解析处理模板内容的方法
 app.engine('html', swig.renderFile);
 // 设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
 app.set('views', './views');
 // 注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
 app.set('view engine', 'html');
 // 在开发过程中，需要取消模板缓存
 swig.setDefaults({cache: false});
 
 // bodyparser设置
 app.use( bodyParser.urlencoded({extended: true}) );
 // 设置允许跨域请求
 app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true)
    next();
});  
 /**
  * 根据不同的功能划分模块
  */
 var indexRouter = require('./src/routes/index');
 app.use('/', indexRouter);
 // app.use('/users', usersRouter); // 接口路由
 
 // 监听端口
 app.listen(process.env.PORT || 3000, function(){
 
     console.log("The Pocket Server Has Started!");
 });