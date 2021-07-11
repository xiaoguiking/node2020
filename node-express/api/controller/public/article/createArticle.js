/**
 * @api {post} api/articles/:slug/comments/:id 创建文章
 * @apiGroup Group   articles
 * @apiDescription   创建文章
 *
 * @apiParam {String} userName  用户名
 */

 const common = require("../../common");
 
 const {  ArticlesModel } = require("../../../model/index");

 
 module.exports.createArticle = async function (req, res) {
   try {
     console.log(req.body)
     const article = ArticlesModel(req.body.article)
     article.author = req.user;
     article.populate("author").execPopulate()
     await article.save()

     return common.sendJsonResponse(res, 200, {
       res: 1,
       message: "提交成功",
       list: article
     })
   } catch (err) {
     next(err);
   }
 };
 