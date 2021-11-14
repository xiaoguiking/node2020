/**
 * @api {post} api//articles/:slug/comments 获取文章评论
 * @apiGroup Group   articles
 * @apiDescription  获取文章评论
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 const { nextTick } = require("process");
 
 module.exports.likeArticle =  function (req, res) {
   try {
     res.send("likeArticle");
   } catch (err) {
     nextTick(err);
   }
 };
 