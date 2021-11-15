/**
 * @api {post} api/profiles/:username/follow 关注用户
 * @apiGroup Group   user
 * @apiDescription  关注用户
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 const { nextTick } = require("process");
 
 module.exports.focusUser =  function (req, res) {
   //  const {userName, password} = req.query;
   try {
     res.send("关注用户");
   } catch (err) {
     nextTick(err);
   }
 };
 