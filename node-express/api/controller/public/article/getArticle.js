/**
 * @api {post} api/articles/:articleId/comments 获取文章路由
 * @apiGroup Group  api
 * @apiDescription 获取文章
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { ArticlesModel } = require("../../../model/index");
 
 module.exports.getArticle =  function (req, res) {
   try {
    const article = await ArticlesModel.findById(req.params.articleId).populate
    if (!article) {
      return common.sendResponse(res, 401, {
        res: -1,
        message: "查询不到数据"
      })
    }

      common.sendJsonResponse(res, 200, {
        res: 0,
        message: "查询成功",
        list: article
      })

   } catch (err) {
     next(err);
   }
 };
 