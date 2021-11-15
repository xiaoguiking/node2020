/**
 * @api {post} api/articles/:slug/comments/:id 删除评论
 * @apiGroup Group   articles
 * @apiDescription  删除评论
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 const { nextTick } = require("process");
 
 module.exports.deleteComment =  function (req, res) {
   try {
     res.send("deleteComment");
   } catch (err) {
     nextTick(err);
   }
 };
 