'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/getArticle');
var router = express.Router();
router.get('/articles/:slug/comments', controller.getArticle);

module.exports = router;
