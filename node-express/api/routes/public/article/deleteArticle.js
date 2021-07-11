//  删除文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/deleteArticle');
var router = express.Router();
var {deleteArticle} = require("../../../../validator/articles")
var auth = require("../../../../middleware/auth")

router.delete('/:articleId',
auth,
deleteArticle,
controller.deleteArticle);

module.exports = router;
