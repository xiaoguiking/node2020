// 更新文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/updateArticle');
var router = express.Router();
var {updateArticle} = require("../../../../validator/articles");

router.put('/:articleId', updateArticle, controller.updateArticle);

module.exports = router;
