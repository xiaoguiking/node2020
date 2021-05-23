/**
 * 1,安装 yarn add ejs
 *
 * 2. app.set("view engine", "ejs")
 *
 *
 * 3.使用 默认加载模板引擎的文件夹是views
 * res.render("index", {})
 *
 */

/**
 * 将ejs后缀文件改成html文件配置流程
 * 1.在app.js添加 var ejs = require("ejs");
 * 2.注册html模板引擎代码 app.engine("html", ejs.__express)
 * 3.将模板引擎换成html代码如下：app.set("view engine", "html");
 *4.修改模板文件后缀为.html
 *
 *
 */
const express = require("express");

const ejs = require("ejs");
const app = express();
// post 获取中间件
const bodyParser = require('body-parser');

const session = require('express-session')

// 配置session
app.use(session({
  secret: 'keyboard cat', // 服务端生成session 签名
  resave: false,        // 强制保存 即使它没有变化
  saveUninitialized: true,  //  强制将为未初始化的session存储
  cookie: {
    maxAge: 1000 * 6, // 过期时间
    secure: false,    // true 表示只有https协议才能访问
  },
  rolling: true, // 在每次请求强行设置cookie，重置cookie的过期时间
}))

app.use(express.urlencoded())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 应用级中间件 用于权限判断
app.use((req, res, next) => {
  console.log(new Date())
  next()
})

app.engine("html", ejs.__express);
app.set("view engine", "html");



// 模板引擎配置
// app.set("view engine", "ejs");

// app.get("/ejs", (req, res) => {
//   res.render("index", {});
// });

app.get("/ejs1", (req, res) => {
  let title = "This is ejs";
  res.render("index1", {
    title: title,
  });
});

app.get("/html", (req, res) => {
  let title = "This is ejs";
  res.render("index1", {
    title: title,
  });
});

// 配置静态资源文件 ------------> 内置中间件
app.use(express.static("static"));



app.get("/", (req, res) => {
  let options = {
    title: "文章首页",
    articleTitle: "文章标题"
  }
  if (req.session.username) {
    res.send(req.session.username + "已经登录")
  } else {
    res.send("未登录", options)
  }
});


// 登录接口
app.get("/login", (req, res) => {
  req.session.username = "张三"
  res.render('login', {
  })
})

/**
 * search   get/post 请求 
 */

// post接口 search
app.get('/search', (req, res) => {
  console.log(req.url)
  // 提取url 后面的字符串
  let queryStr = req.url.split("?")[1];
  console.log(queryStr)
  // 表单提交的键值进行分割
  let keyValueArr = queryStr.split("&");
  console.log(keyValueArr, "arr")
  // 设置query对象，对键值进行保存
  let query = {};
  keyValueArr.forEach(item => {
    let key = item.split("=")[0];
    let value = item.split("=")[1];
    query[key] = value

  })
  console.log(query, "===========>query", query.username)
  res.send("get请求search")
})

// post 接口
app.post("/doLogin", (req, res) => {
  const body = req.body;
  console.log("body", body)
  res.send("执行提交" + '用户名:' + body.username + '密码' + body.pwd)
})


// 
app.get("/index", (req, res) => {
  console.log("执行首页")
  res.render('index', {
  })
})

app.get("/search_index", (req, res) => {
  let query = req.query;
  console.log(query, "=============> query")
})

app.post("/search_index", (req, res) => {
  let query = req.body;
  console.log(query, "=============> query")
})



app.get("/news", (req, res) => {
  let newInfo = {
    username: "wanglin",
    age: 123,
  };

  let arr = ["天涯", "海角", "铁血无双"];
  let article = "<h2>渲染html标签</h2>";
  res.render("news", {
    newInfo: newInfo,
    article: article,
    flag: true,
    score: 50,
    arr: arr,
  });
});

// 错误处理中间件
// app.use((req, res, next) => {
//   res.status(404).send("404")
// })

app.listen(3002, () => {
  console.log("express02 port is 3002");
});
