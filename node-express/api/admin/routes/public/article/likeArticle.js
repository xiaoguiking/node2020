'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/likeArticle');
var router = express.Router();
router.post('/articles/:slug/favorite', controller.likeArticle);

module.exports = router;
