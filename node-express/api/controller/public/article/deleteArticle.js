/**
 * @api {delete} api/articles/:articleId 删除文章
 * @apiGroup Group   articles
 * @apiDescription   删除文章
 *
 */

 const common = require("../../common");
 
 module.exports.deleteArticle = async function (req, res) {
   try {
    //  删除获取参数形式
     console.log(req.params.articleId)
     const article = req.article;
     await article.remove();

     return common.sendJsonResponse(res, 200, {
       res: 1,
       message: "删除成功",
     })
   } catch (err) {
     next(err);
   }
 };
 