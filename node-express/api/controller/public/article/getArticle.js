/**
 * @api {get} api/articles/:articleId 获取文章
 * @apiGroup Group  articles
 * @apiDescription 获取文章
 *
 * @apiParam {String} articleId 文章id 
 * @apiParam {String} password  
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { ArticlesModel } = require("../../../model/index");
 
 module.exports.getArticle =  async function (req, res) {
   try {
    console.log(req.params.articleId, "id")
    // const article = await ArticlesModel.findById(req.params.articleId).populate('author');
    const article = await ArticlesModel.find({author:req.params.articleId}).populate('author');

    console.log(article, "getArticle======>")

    if (!article) {
      return common.sendResponse(res, 401, {
        error: "-1",
        message: "查询不到数据"
      })
    }

      common.sendJsonResponse(res, 200, {
        error: "0",
        message: "查询成功",
        list: article
      })

   } catch (err) {
    //  next(err);
    console.log(err, "error")
   }
 };
 