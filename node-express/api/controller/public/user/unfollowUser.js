/**
 * @api {delete} api/profiles/:username/follow  取消关注
 * @apiGroup Group   user
 * @apiDescription 取消关注
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 const { nextTick } = require("process");
 
 module.exports.unfollowUser =  function (req, res) {
   //  const {userName, password} = req.query;
   try {
     res.send("取消关注");
   } catch (err) {
     nextTick(err);
   }
 };
 