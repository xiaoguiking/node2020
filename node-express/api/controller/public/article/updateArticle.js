/**
 * @api {put} api/articles/:articleId 更新文章
 * @apiGroup Group  article
 * @apiDescription 更新文章
 *
 * @apiParam {String} articleId 文章id 
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { ArticlesModel } = require("../../../model/index");
 
 module.exports.updateArticle =  async function (req, res) {
   try {
    console.log(req.params.articleId, "id")
    const article = await ArticlesModel.findById(req.params.articleId).populate('author');

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
 