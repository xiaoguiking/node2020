/**
 * @api {post} api/articles/:slug/comments 获取文章路由
 * @apiGroup Group   articles
 * @apiDescription  关注用户
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { User } = require("../../../model/index");
 const { nextTick } = require("process");
 
 module.exports.unlikeArticle =  function (req, res) {
   try {
     res.send("unlikeArticle");
   } catch (err) {
     nextTick(err);
   }
 };
 