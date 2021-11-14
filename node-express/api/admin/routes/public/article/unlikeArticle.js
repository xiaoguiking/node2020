'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/unlikeArticle');
var router = express.Router();
router.delete('/articles/:slug/favorite', controller.unlikeArticle);

module.exports = router;
