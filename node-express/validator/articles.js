/**
 *  文章校验 validator 
 */
const { body, param } = require('express-validator');
const validate = require("../middleware/validator")
const mongoose = require("mongoose")
const { ArticlesModel } = require("../api/admin/model/index");
const {sendResponse} = require("../api/admin/controller/common")
// const md5 = require("../utils/md5")


exports.createArticle = validate([
    body("article.title").notEmpty().withMessage("标题不能为空"),
    body("article.description").notEmpty().withMessage("文章摘要不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空")
])


exports.getArticle = validate([
    param("articleId").custom(async value => {
        console.log(value)
        if (!mongoose.isValidObjectId(value)) {
            return Promise.reject("文章id类型错误")
            // 同步: 失败
            // throw new Error("文章id类型错误")
        }
        //  同步 成功
        // return true;
    })
])





exports.updateArticle = [
    //     // 雷同 getArticle 
    //     // 采用函数封装调用
    // 校验ObjectId
    validate.isValidObjectId(['params', 'articleId']),

    // 检验文章是否存在
    async (req, res, next) => {
        const articleId = req.params.articleId;
        console.log(articleId, "id")
        const article = await ArticlesModel.findById(articleId)
        // const article = await ArticlesModel.find({articleId})
        console.log(article, "风铃")
        req.article = article;
        if(!article) {
            return sendResponse(res, 404, {
                error: "-1",
                message: "资源404"
            })
        }

        next()
    },

    // 修改文章的作者是否是当前登录的作者
    // async (req, res, next) => {
    //     console.log(req.user._id, "当前登录用户")
    //     console.log(req.article.author,"作品")
    //     if(req.user._id.toString() !== req.article.author.toString()) {
    //         return sendResponse(res, 403, {
    //             res: -1,
    //             message: "文章作者和当前登录作者不相符"
    //         })
    //     }
    //     next()
    // }
]


exports.deleteArticle = exports.updateArticle;

