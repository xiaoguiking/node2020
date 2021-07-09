/**
 *  文章校验 validator 
 */
const { body, param } = require('express-validator');
const validate = require("../middleware/validator")
const { Mongoose } = require('mongoose');
// const { ArticlesModel } = require("../api/model/index");
// const md5 = require("../utils/md5")


exports.createArticle = validate([
    body("article.title").notEmpty().withMessage("标题不能为空"),
    body("article.description").notEmpty().withMessage("文章摘要不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空")
])


exports.getArticle = validate([
    param("articleId").custom(async value => {
        if (!Mongoose.isValidObjectedId(value)) {
            return Promise.reject("文章id类型错误")
            // 同步: 失败
            // throw new Error("文章id类型错误")
        }
        //  同步 成功
        // return true;
    })
])