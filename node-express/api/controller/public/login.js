/**
 * @api {get} api/user/login  用户登录
 * @apiGroup Group   user
 * @apiDescription 用户登录信息
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

const mongoose = require("mongoose");
const common = require("../common");

const {User} = require("../../model/index")

module.exports.login = function (req, res) {
  const {userName, password} = req.query;
  console.log(userName, password)
  User.find({ userName, password},function(err,data) {
      if (err) {
          common.sendJsonResponse(res, 500, err);
          return;
      }
      if (userName && password) {
        let data = {
          err: 0,
          msg: "登录成功"
        }
        common.sendResponse(res, 200,data)
      } else {
        let data = {
          err: -1,
          msg: "参数问题"
        }
        common.sendResponse(res, 200,data)
      }
      // console.log(data, "==============>data")
      // common.sendResponse(res, 200, data);
  })

};
