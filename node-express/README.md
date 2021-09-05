## 业务接口

- 增加 true api/food/add
- 查询 true api/food/find
- 关键字查询 api/food/getInfoByPage
- 分页查询
- 删除 api/food/delete
- 修改 api/food/update
- 上传图片 /file/profile ---- 支持单文件上传/ 文件名事件数戳
  type:

- 玄幻 1
- 思想 2
- 字典 3
- 恋爱 4

## 测试接口 CRUD 任务列表

- 查询任务列表 GET /todos
- 根据 id 查询单个任务 GET /todos/:id
- 添加任务 POST /todos
- 修改任务 PATCH /todos
- 删除任务 DELETE /todos:id

## apidoc

- api 文档生成命令 apidoc -i ./api -o ./src/apidoc
- 本地服务器文档启动命令 yarn api

## todos

```
今天配接口，使用fs模块读取json出现了错误'no such file or directory'，然后经查终于解决，特此记录。

使用nodejs的fs模块读取文件时习惯用相对路径，但是运行的时候出现了上述的错误，原因就是fs模块读取文件的相对路径是以启动server.js的位置为基准的，而不是以server.js文件的位置。
```

## 中间件核心：(AOP)

就是在现有代码程序中，在程序生命周期或横向流程中`加入或者减去`一个或者多个功能，不影响原有功能。

## express 中间件分类

- 应用程序级别中间件 1.普通请求路径

  ```javascript
  var express = require("express")
  var app = express();

  app.use((req, res, next) => {
      console.log('Time':  Date.now())
  })
  ```

  2.多个处理函数

  ```javascript
  app.use(
    "/user/:id",
    function (req, res, next) {
      next(); // 执行下一个，当前的
    },
    function (req, res, next) {
      next(); // 跳出当前执行
    }
  );
  ```

  3.数组参数中间件

  ```javascript
  function loginUrl(req, res, next) {
    console.log(req.url);
    next();
  }

  function loginStatus(req, res, next) {
    console.log(req.status);
    next();
  }

  var loginParams = ["loginUrl", "loginStatus"];

  app.get("/user/:id", loginParams, function (req, res, next) {
    res.send("返回数据");
  });
  ```

- 路由级别中间件

```javascript
const express = require("express");
// 创建路由实例
const router = express.Router();

router.get("/foo", (req, res) => {
  console.log("get/foo");
});

router.get("/post", (req, res) => {
  console.log("post/foo");
});

// 导出路由实例
// export default router
module.exports = router;

// app.js 挂载路由
app.use(router);
// 限定接口前缀
app.use("/api", router);
```

- 错误处理中间件
- 内置中间件
- 第三方中间件

## RESTFUL 接口设计规范

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
  客户端每一次请求，都会给出对应的状态码，回应包括 http 状态码或者数据请求两种方式。

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
  基于 JWT 的接口权限认证

  - 字段名: Authorization
  - 字段值: Bearer token 数据

- 解决跨域

## node-express 目录结构(后期)

- config
  - config.default.js 配置文件
- controller 用于解析用户的输入，处理后返回对应的数据
- model 数据持久层
- middleware 用于中间件
- router - 用于配置 url 路由
- util - 工具模块
- app.js - 用户自定义启动时的文件

## 配置常用中间件

- 解析请求体

  - express.json()
  - express.urlencoded()

- 日志输出
  morgan()

- 为客户端提供跨域资源请求
- cors

## JWT 用户身份信息验证 39 - 43

### 跨域认证问题(流程)

- 1.用户向服务器发送用户名和密码。
- 2.服务器通过验证后, 在当前通话 session 里面保存相关的数据,比如用户角色、登录时间。
- 3.服务器向用户返回一个 session_id, 写入用户的 cookie
- 4.用户随后的每一次请求,都会通过 cookie,将 session_id 传回服务器
- 5.服务器收到 session_id, 找到前期保存的数据，由此得知用户的身份。

> 以上模式问题: 扩展性不行，单机没有，集群的条件下需要共享 session 数据。

### JWT 原理 (JSON web token)

1. 服务器认证后生成一个 json 对象, 发送给用户。

```javascript
{
  "姓名": "json",
  "角色": "管理员"
}
```

2.用户与服务端通信的时候,都要返回这个 json 对象,服务器完全只靠这个对象认证用户身份。
为防止用户篡改数据，服务端生成对象的时候，加加入签名。

3.JWT 的三部分组成

```markdown
- Header 头部
- payload 负载
- Signature 签名

Header.payload.Signature
```

4.详细组成 --- 网站 https://jwt.io/

```markdown
Header

Header 部分是一个 JSON 对象元数据
{
"alg":"HS256", // 签名算法
"typ" "JWT" // token 令牌类型
}

payload

- iss 签发人
- exp 过期时间
- sub 主题
- aud 受众
- nbf 生效时间
- iat 签发时间
- jti 编号

Signature 对前两部分数据的签名，防止被篡改。

**\***在 jwt 中,消息体是透明的,使用签名可以保证数据不被篡改，但不能实现数据的加密功能 **\***
```

### JWT 使用方式

> 客户端收到服务端的 jwt,可以存储在 cookie 或者 localstorage 中

> 每次通信，客户端发送请求到服务器需要带上 jwt.

- 1.可以放在 cookie 里面，无法跨域
- 2. 跨域放在 HTTP 请求头里面
  ```
  Authorization: Bearer <token>
  ```
- 3.跨域时候,放在 jwt 的 post 请求体里面

> 时间记录查询

```
db.getCollection('base_user_info').find({"create_time":{"$gte":ISODate("2018-03-29 07:59:06"),"$lte":ISODate("2018-03-29 08:30:46")}});
```

```

static async list(ctx) {
    const date_in = ctx.request.body.datein;        //入住时间  2019-7-3
    const date_out = ctx.request.body.dateout;      //离店时间  2019-7-4

    const orders = await OrderModel.find({
        datein: {
            '$gte': date_in                 // $gte 大于等于
        },
        dateout: {
            '$lte': date_out                // $lte 小于等于
        },
        status: {
            '$in': [1,2,3]                  // $in 在多个值范围内
        }
    })
}
```

## 项目登录记录

```
admin  admin  token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ4MjQ1ZTAxYzQzNDY0ZTNmYjEyMDciLCJpYXQiOjE2MjUzNjY0NDZ9.KoDrH1HRbPhFGHfANHL_SVGN8NNh0aKRaGvFxbDHBO8   60d8245e01c43464e3fb1207

风凌天下 fengling  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGVhMzhiOGFkNDU5NzkxNjQ0NGQ4YzciLCJpYXQiOjE2MjU5NjI5NjUsImV4cCI6MTYyNjA0OTM2NX0.5F7pgDNMmN6WZd5Q7CnegNQeSpEi-04ke4xduRzFlFI    60ea38b8ad4597916444d8c7



{
	"article": {
		"title": "雪中",
		"description":"雪中悍刀行",
		"body":"烽火戏诸侯所著",
		"tagList": ["dragons", "fire"]
	}
}

{
    "res": 1,
    "message": "提交成功",
    "list": {
        "tagList": [
            "jianlai",
            "fire"
        ],
        "favoritesCount": 0,
        "_id": "60ea3a63ad4597916444d8c8",
        "title": "剑来",
        "description": "剑来,一剑斩15",
        "body": "烽火戏诸侯所著",
        "createTime": "2021-07-11T00:25:07.749Z",
        "updateTime": "2021-07-11T00:25:07.749Z",
        "author": {
            "blo": null,
            "img": null,
            "_id": "60ea38b8ad4597916444d8c7",
            "userName": "风凌天下",
            "title": "天下",
            "email": "fengling@163.com",
            "createTime": "2021-07-11T00:18:00.176Z",
            "updateTime": "2021-07-11T00:18:00.176Z",
            "__v": 0
        },
        "__v": 0
    }
}
```


## mongoDB 基本语法

- 插入文档
- 删除文档
- 更新文档
- 查找文档
