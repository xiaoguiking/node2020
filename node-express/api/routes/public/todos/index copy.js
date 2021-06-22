"use strict";
var express = require("express");
var router = express.Router();
var common = require("../../../controller/common");
var fs = require("fs");
var path = require("path");

const { getDb } = require("./db.js");

/**
 * @api {get} api/todos  查询任务列表
 * @apiGroup Group   TODOS
 * @apiDescription   查询任务列表
 *
 * @apiParam {String}
 */
let PUBLIC_PATH = path.resolve(__dirname, "db.json");
console.log(PUBLIC_PATH, "========path");

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

  // 常规形式
  // fs.readFile(PUBLIC_PATH, "utf8", (err, data) => {
  //   if (err) {
  //       common.sendJsonResponse(res, 500, err);
  //   }

  //   const db = JSON.parse(data);
  //   console.log(db.todos);
  //   common.sendResponse(res, 200, {
  //       error: "1",
  //       message: "查询成功",
  //       data: db.todos
  //   })
  // });
});

/**
 * @api {get} api/todos/:id  根据id查询单个任务
 * @apiGroup Group   TODOS
 * @apiDescription   根据id查询单个任务
 *
 * @apiParam {String}  id
 */
router.get("/todos/:id", (req, res) => {
  console.log("根据id查询单个任务");
  console.log(req.params.id, "id");
  let id = Number.parseInt(req.params.id);
  fs.readFile(PUBLIC_PATH, "utf8", (err, data) => {
    if (err) {
      common.sendJsonResponse(res, 500, err);
    }

    const db = JSON.parse(data);
    const todo = db.todos.find((todo) => {
      return todo.id == id;
    });
    console.log(todo, "===========>todo");

    // TODO 此处有问题
    // _http_outgoing.js:518  --------- 没有阻止又继续执行 404 ------ 200
    //throw new ERR_HTTP_HEADERS_SENT('set');
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

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
  });
});

/**
 * @api {post} api/todos 添加任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}  id
 */
router.post("/todos", (req, res) => {
  console.log("添加任务");
  res.send({
    message: "添加任务",
  });
});

/**
 * @api {patch} api/todos 添加任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}
 */
router.patch("/todos", (req, res) => {
  console.log("修改任务");
  res.send({
    message: "修改任务",
  });
});

/**
 * @api {put} api/todos:id 删除任务
 * @apiGroup Group   TODOS
 * @apiDescription   添加任务
 *
 * @apiParam {String}  id
 */
router.delete("/todos:id", (req, res) => {
  console.log("删除任务");
  res.send({
    message: "请求成功",
  });
});

module.exports = router;
