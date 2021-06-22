"use strict";
// const bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var common = require("../../../controller/common");

//引入body-parser模块
// const bodyParser = require('body-parser');
//配置body-parser模块

const app = express();
// 解析客户端  application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false}));

// 解析客户端请求体 application/json
// app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

const { getDb } = require("./db.js");

// router.use((req, res, next) => {
//   //允许的请求类型
//   // 'Access-Control-Allow-Methods:GET,POST,PUT,POST'
//   //允许的请求头字段
//   // 'Access-Control-Allow-Headers:x-requested-with,content-type'
//   res.append('Access-Control-Allow-Origin', "*");
//   res.append('Access-Control-Allow-Content-Type', "*");
//   next()
// })


/**
 * @api {get} api/todos  查询任务列表
 * @apiGroup Group   TODOS
 * @apiDescription   查询任务列表
 *
 * @apiParam {String}
 */

router.get("/todos", async (req, res) => {
  console.log("查询任务列表");
  try {
    const data = await getDb();
    common.sendResponse(res, 200, {
      error: "1",
      message: "查询成功",
      data: data.todos,
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, err);
  }
});

/**
 * @api {get} api/todos/:id  根据id查询单个任务
 * @apiGroup Group   TODOS
 * @apiDescription   根据id查询单个任务
 *
 * @apiParam {String}  id
 */
router.get("/todos/:id", async (req, res) => {
  console.log("根据id查询单个任务");
  let id = Number.parseInt(req.params.id);
  try {
    const data = await getDb();
    const todo = data.todos.find((todo) => {
      return todo.id == id;
    });
    if (!todo) {
      console.log(!todo);
      return common.sendJsonResponse(res, 500, {
        message: "无对应id",
      });
    }

    common.sendResponse(res, 200, {
      error: "1",
      message: `根据id查询单个任务${req.params.id}`,
      data: todo,
    });

  } catch (error) {
    common.sendJsonResponse(res, 500, err);
  }
});

/**
 * @api {post} api/todos/add 添加任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}  id
 * @apiParam {String}  id
 * @apiParam {String}  id
 */

// req.body 获取不到内容，暂时没有解决
router.post("/todos/add", async (req, res) => {
  // 1.获取客户端请求体参数
  // 2.数据验证
  // 3.数据验证通过，把数据存到db中
  console.log("添加任务");
  console.log(req.query, "body============>")
  const {id, title} = req.body;
  console.log(id, title)
  common.sendResponse(res, 200, {
    error: "1",
    message: `添加成功`,
    data: {
      id: 1,
      title: 2
    },
  });
  // res.send({
  //   message: "添加任务",
  // });
});

/**
 * @api {patch} api/todos/:id 添加任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}    title
 */
router.patch("/todos/:id", async(req, res) => {
  console.log("修改任务");
  const todo = req.body;
  console.log(todo, "===========>todo")
  try {
    const data = await getDb();
    common.sendResponse(res, 200, {
      error: "1",
      message: "查询成功",
      data: data.todos,
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, err);
  }

});

/**
 * @api {put} api/todos:id 删除任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}  id
 */
router.delete("/todos/:id", async (req, res) => {
  console.log(req.params.id)
  console.log("删除任务");
  try {
    const data = await getDb();
    common.sendResponse(res, 200, {
      error: "1",
      message: "删除成功",
      data: data.todos,
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, err);
  }

});

module.exports = router;
