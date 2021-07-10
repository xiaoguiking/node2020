/**
 * @api {get} api/articles/getArticlesList 获取文章列表
 * @apiGroup Group  api
 * @apiDescription 获取文章
 *
 * @apiParam {String} limit  展示多少条
 * @apiParam {String} offset 跳过几条
 * @apiParam {String} tag   文章tag
 * @apiParam {String} author  筛选某个作者发布的文章
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { ArticlesModel, User } = require("../../../model/index");

module.exports.getArticlesList = async function (req, res) {
  try {
    const { limit = 20, offset = 0, tag, author } = req.query;
  

    console.log(limit, offset, tag, author)
    const filter = {};

    if (tag) {
      filter.tagList = tag;
    }

    if(author && author !== "null") {
      const user = await User.findOne({userName: author})

      console.log(user, "========>user")

      filter.author = user ? user._id: null;
      console.log(filter.author)
    }

    
    const articles = await ArticlesModel.find(filter)
      .skip(Number.parseInt(offset))  // 跳过多少条
      .limit(Number.parseInt(limit))    // 取多少条
      .sort({
        // 倒序 -1， 升序： 1
        createTime: -1,
      })

    console.log()
    const articlesCount = await ArticlesModel.countDocuments();
    common.sendJsonResponse(res, 200, {
      res: 0,
      message: "查询成功",
      list: articles,
      articlesCount
    })

  } catch (err) {
    next(err);
  }
};
