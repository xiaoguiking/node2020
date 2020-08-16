console.log("这是一个服务器");

const myhttp = require("http"); // 导入http模块

const myserver = myhttp.createServer(function (request, require) {
  //  request 请求对象
  // response 响应对象
  console.log("服务器运行中");
});

myserver.listen(4353, function () {
  console.log("port is 4353");
});

// package.json文件是项目配置以及依赖文件
// src 静态资源目录文件
// app.js 服务器入口文件
// config 配置文件
// routers 文件夹（路由）
// controller 文件夹控制器---
// dao 文件夹数据持久
