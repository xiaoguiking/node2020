/**
 * @api {put} api/articles/:articleId 更新文章
 * @apiGroup Group  article
 * @apiDescription 更新文章
 *
 * @apiParam {String} title  标题
 * @apiParam {String} body  内容
 * @apiParam {String} description 描述
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 const { ArticlesModel } = require("../../../model/index");
 

 module.exports.updateArticle =  async function (req, res) {
   try {
    // console.log(req.params.articleId, "id")
    const article = req.article;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;

    await article.save();

    if (!article) {
      return common.sendResponse(res, 401, {
        res: -1,
        message: "修改失败"
      })
    }

      common.sendJsonResponse(res, 200, {
        res: 0,
        message: "更新成功",
        list: article
      })

   } catch (err) {
     next(err);
   }
 };
 