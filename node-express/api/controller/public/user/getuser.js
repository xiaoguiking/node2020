/**
 * @api {get} api/user  获取当前用户登录信息
 * @apiGroup Group   user
 * @apiDescription 获取当前用户登录信息
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { User } = require("../../../model/index");
const { nextTick } = require("process");

module.exports.getUser =  function (req, res) {
  //  const {userName, password} = req.query;
  try {
    JSON.parse("12ksdlkfj")
    res.send("getUser");
  } catch (err) {
    nextTick(err);
  }
};
