/**
 * @api {get} api/profiles/:username 获取当前用户资料
 * @apiGroup Group   user
 * @apiDescription 获取当前用户资料
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 
 module.exports.getUserInfo =  function (req, res) {
   //  const {userName, password} = req.query;
   try {
     res.send("获取当前用户资料");
   } catch (err) {
     next(err);
   }
 };
 