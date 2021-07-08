const { body, query } = require('express-validator');
const validate = require("../middleware/validator")
// const { ArticlesModel } = require("../api/model/index")
// const md5 = require("../utils/md5")


exports.createArticle = validate([
    body("article.title").notEmpty().withMessage("标题不能为空"),
    body("article.description").notEmpty().withMessage("文章摘要不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空")
])