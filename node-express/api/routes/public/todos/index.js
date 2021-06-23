"use strict";
// const bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var common = require("../../../controller/common");

// Content-Type:application/x-www-form-urlencoded;charset=utf-8

//引入body-parser模块
// const bodyParser = require('body-parser');
//配置body-parser模块

const app = express();
// 解析客户端  application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false}));

// 解析客户端请求体 application/json
// app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: false }))

// parse application/json
// app.use(express.json())

const { getDb, saveDb } = require("./db.js");

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
 * 
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
    common.sendJsonResponse(res, 500, {
      error: -1,
      message: "获取数据失败"
    });
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
 * @apiParam {String}  title
 */

router.post("/todos/add", async (req, res) => {
  console.log("添加任务");
  try {
    // 1.获取客户端请求体参数
    const todo = req.body;
    // 2.数据验证
    if (!todo.title) {
      return common.sendJsonResponse(res, 422, {
        error: "-1",
        message: "the title is required",
      });
    }

    // 3.数据验证通过，把数据存到db中
    const db = await getDb();
    let lastTodo = db.todos[db.todos.length - 1];
    console.log(lastTodo, "11");
    todo.id = lastTodo ? lastTodo.id + 1 : 1;
    
    db.todos.push(todo);
    await saveDb(db);
    common.sendResponse(res, 200, {
      error: "0",
      message: "添加成功",
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, {
      error: "-2",
      message: "500"
    });
  }
});

/**
 * @api {patch} api/todos/:id 修改任务
 * @apiGroup Group   TODOS
 * @apiDescription   修改任务
 *
 * @apiParam {String}    title
 */
router.patch("/todos/:id", async (req, res) => {
  console.log("修改任务");
  // 1.获取表单数据
  const todo = req.body;
  console.log(todo, "=============>todo");
  // 获取url中id
  console.log(req.params.id, "=============>");
  try {
    // 2.查找要修改的任务项
    const data = await getDb();
    const ret = data.todos.find(
      (item) => item.id === Number.parseInt(req.params.id)
    );
    console.log(ret, "index");

    if (!ret) {
      return common.sendResponse(res, 404, {
        message: "无对应id修改title",
      });
    }

    Object.assign(ret, todo);

    await saveDb(data);
    common.sendResponse(res, 200, {
      error: "1",
      message: "修改成功",
      data: data,
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, {
      message: "修改失败",
    });
  }
});

/**
 * @api {put} api/todos:id 删除任务
 * @apiGroup Group   TODOS
 * @apiDescription   删除任务
 *
 * @apiParam {String}  id
 */
router.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "=======>");
  console.log("删除任务");
  try {
    const data = await getDb();
    const index = data.todos.findIndex((i) => {
      return i.id === Number.parseInt(id);
    });
    console.log(typeof index);
    if (index === -1) {
      return common.sendJsonResponse(res, 404, {
        error: -1,
        message: "无对应id",
      });
    }

    data.todos.splice(index, 1);
    await saveDb(data);

    common.sendResponse(res, 200, {
      error: "0",
      message: "删除成功",
    });
  } catch (error) {
    common.sendJsonResponse(res, 500, {
      error: -2,
      message: "删除失败，500",
    });
  }
});

module.exports = router;
