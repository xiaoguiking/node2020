// 获取文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/getArticle');
var router = express.Router();
var {getArticle} = require("../../../../validator/articles");

router.get('/:articleId', getArticle, controller.getArticle);

module.exports = router;
