## 业务接口

- 增加 true  api/food/add
- 查询 true   api/food/find
- 关键字查询  api/food/getInfoByPage
- 分页查询   
- 删除    api/food/delete
- 修改    api/food/update
- 上传图片 /file/profile ---- 支持单文件上传/ 文件名事件数戳
type:

- 玄幻 1
- 思想 2
- 字典 3
- 恋爱 4


## 测试接口  CRUD 任务列表
- 查询任务列表 GET  /todos
- 根据id查询单个任务  GET  /todos/:id
- 添加任务   POST  /todos
- 修改任务  PATCH  /todos
- 删除任务  DELETE /todos:id


## apidoc

- api文档生成命令 apidoc -i ./api -o ./src/apidoc 
- 本地服务器文档启动命令 yarn api





## todos
```
今天配接口，使用fs模块读取json出现了错误'no such file or directory'，然后经查终于解决，特此记录。

使用nodejs的fs模块读取文件时习惯用相对路径，但是运行的时候出现了上述的错误，原因就是fs模块读取文件的相对路径是以启动server.js的位置为基准的，而不是以server.js文件的位置。 
```



## 中间件核心：(AOP)
就是在现有代码程序中，在程序生命周期或横向流程中`加入或者减去`一个或者多个功能，不影响原有功能。


## express 中间件分类

- 应用程序级别中间件
    1.普通请求路径
    ```javascript
    var express = require("express")
    var app = express();

    app.use((req, res, next) => {
        console.log('Time':  Date.now())
    })
    ```
    2.多个处理函数
    ```javascript
    app.use("/user/:id", function (req, res, next) {
        
        next(); // 执行下一个，当前的
    }, function (req, res, next) {
        next();   // 跳出当前执行 
    })
    ```
    3.数组参数中间件
    ```javascript
    function loginUrl (req, res, next) {
        console.log(req.url)
        next()
    }

    function loginStatus (req, res, next) {
        console.log(req.status)
        next()
    }

    var loginParams = ["loginUrl", "loginStatus"]

    app.get("/user/:id", loginParams, function (req,res, next) {
        res.send("返回数据")
    })
    ```
- 路由级别中间件
 ```javascript
    const express = require("express");
    // 创建路由实例
    const router = express.Router();

    router.get('/foo', (req, res) => {
        console.log("get/foo")
    })

    router.get('/post', (req, res) => {
        console.log("post/foo")
    })

    // 导出路由实例
    // export default router
    module.exports = router;

    // app.js 挂载路由 
    app.use(router)
    // 限定接口前缀
    app.use("/api", router)
 ```
- 错误处理中间件
- 内置中间件
- 第三方中间件





## RESTFUL接口设计规范

- 版本
  ```JavaScript
   https://api.example.com/v1
   将版本信息放在http头部中，或者是放在URL中直观些。
  ```
- 路径
    ```javascript
    每个网址代表一种资源，名词和数据库中的表对应
    https://api.example.com/v1/zoos
    ```
- 动词
    ```javascript
    - GET 读取:
    - POST 创建:
    - PUT 完整更新:
    - PATCH 部分更新: 
    - DELETE 删除资源:
    ```
- 过滤信息
    - ?limit=10 : 指定返回记录的数量
    - ?offset=10: 指定记录返回的开始位置
    - ?page&page_size=10: 指定第几页以及每页的记录数
    - ?sortby=name&order=asc： 指定返回结果按照哪个属性排序，已经排序的顺序。
    - ?animal_type_id=1 指定筛选条件

- 状态码设定
  客户端每一次请求，都会给出对应的状态码，回应包括http状态码或者数据请求两种方式。

  - 1xx: 相关信息
  - 2xx: 操作成功
  - 3xx: 重定向
  - 4xx: 客户端错误
  - 5xx: 服务器错误

 - 错误处理
  - 不建议的方式
    ```javascript
    
    即使发生错误，也返回200状态码，把错误信息放在数据响应体里面，
    http/1.1 200 ok
    Content-Type: application/json

    {
        "status": "failure",
        "data": {
            error: "request fail"
        }
    }
    ```
    - 推荐方式
     ```javascript
     http/1.1  Bad Request

     Content-type: appliation/json
     {
         "error": "Invaild payload",
         "detail": 
         "surname": "This field is fail"
     }
     ```

- 身份认证
  基于JWT的接口权限认证
  - 字段名: Authorization
  - 字段值: Bearer token 数据


- 解决跨域



## node-express 目录结构(后期)
- config 
    - config.default.js  配置文件
- controller    用于解析用户的输入，处理后返回对应的数据
- model     数据持久层
- middleware  用于中间件
- router   - 用于配置url路由
- util - 工具模块
- app.js  - 用户自定义启动时的文件


## 配置常用中间件

- 解析请求体
    - express.json()
    - express.urlencoded()

- 日志输出
    morgan()

- 为客户端提供跨域资源请求
 - cors