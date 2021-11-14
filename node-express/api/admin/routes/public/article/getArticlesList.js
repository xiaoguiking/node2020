// 获取文章列表
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/getArticlesList');
var router = express.Router();

router.get('/getArticlesList' , controller.getArticlesList);

module.exports = router;
