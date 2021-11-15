/**
 * @api {get} api/getUser  获取当前用户登录信息
 * @apiGroup Group   user
 * @apiDescription 获取当前用户登录信息
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { User } = require("../../../model/index");

module.exports.getUser =  function (req, res) {
  console.log(req.headers, "请求头")
  try {
    // res.send("getUser获取当前用户登录信息");
    common.sendJsonResponse(res, 200, {
      user: req.user
    })
  } catch (err) {
    next(err);
  }
};
