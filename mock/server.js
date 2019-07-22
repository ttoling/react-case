const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块
const path = require('path');
let mock='/mock';//创建根api名 这里的 /mock 如同 后端真实/api,也叫定义路由根别名
const Mock = require('mockjs');
//创建服务器
const server = jsonServer.create();//创建jsonserver 服务对象

//配置jsonserver服务器 中间件
server.use(jsonServer.defaults({
  static:path.join(__dirname,"/public"),//静态资源托管
}));
server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件

server.use((request, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  next();
});

let mr = Mock.Random;//提取mock的随机对象
//模拟登陆注册校验
server.post(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.query.username;
  let password=req.query.password;
  (username === 'aa' && password === 'aa123')?
      res.jsonp({
        "error": 0,
        "msg": "登录成功",
        "data": {
          "follow": mr.integer(1,5),
          "fans": mr.integer(1,5),
          "nikename": mr.cname(),
          "icon": mr.image('20x20',mr.color(),mr.cword(1)),
          "time": mr.integer(13,13)
        }
      }) :
      res.jsonp({
        "error": 1,
        "msg": "登录失败",
      })
});
server.post(mock+'/reg', (req, res) => {
  let username=req.query.username;
  (username !== 'aa') ?
      res.jsonp({
        "error": 0,
        "msg": "注册成功",
        "data": {
          "follow": mr.integer(0,0),
          "fans": mr.integer(0,0),
          "nikename": mr.cname(),
          "icon": mr.image('20x20',mr.color(),mr.cword(1)),
          "time": mr.integer(13,13)
        }
      }) :
      res.jsonp({
        "error": 1,
        "msg": "注册失败",
      })
});
//响应mock接口 自定义返回结构 定义mock接口别名
const router = jsonServer.router(db);//创建路由对象 db为mock接口路由配置
//自定义返回结构
router.render = (req, res) => {
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);
  setTimeout(()=>{//模拟服务器延时
    res.jsonp({
      error: len !== 0 ? 0 : 1,
      msg: len !== 0 ? '成功' : '失败',
      data: res.locals.data
    })
  },1000)
  // res.jsonp(res.locals.data)
};

//路由自定义
server.use(jsonServer.rewriter({
  [mock+"/*"]: "/$1",
  // "/product\\?dataName=:dataName": "/:dataName",
  // "/banner\\?dataName=:dataName": "/:dataName",
  // "/detail\\?dataName=:dataName&id=:id": "/:dataName/:id",

  // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
  // "/product/add\\?dataName=:dataName": "/:dataName",
  // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"
}));
server.use(router);//路由响应

//开启jsonserver服务
server.listen(3333, () => {
  console.log('mock server is running')
});