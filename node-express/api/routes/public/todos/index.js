"use strict";
var express = require("express");
var router = express.Router();
var common = require("../../../controller/common");
var cc = require("./db.json")
var fs = require("fs")
var path = require('path');

/**
 * @api {get} api/todos  查询任务列表
 * @apiGroup Group   TODOS
 * @apiDescription   查询任务列表
 *
 * @apiParam {String}
 */
 let PUBLIC_PATH = path.resolve(__dirname, 'db.json');

 console.log(PUBLIC_PATH, "========path")
router.get("/todos", (req, res) => {
  console.log("查询任务列表");
  fs.readFile(PUBLIC_PATH, "utf8", (err, data) => {
    if (err) {
        common.sendJsonResponse(res, 500, err);
    }

    console.log(data)
    const db = JSON.parse(data);
    console.log(db.todos);
    common.sendResponse(res, 200, {
        error: "1",
        message: "查询成功",
        data: db.todos
    })
  });
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

  res.send({
    message: `根据id查询单个任务${req.params.id}`,
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
