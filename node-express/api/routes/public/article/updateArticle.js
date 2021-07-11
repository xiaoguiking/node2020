// 更新文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/updateArticle');
var router = express.Router();
var {updateArticle} = require("../../../../validator/articles");
var auth = require("../../../../middleware/auth")

router.put('/:articleId',auth, updateArticle, controller.updateArticle);

module.exports = router;
