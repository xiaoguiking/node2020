//  创建文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/createArticle');
var router = express.Router();
var {createArticle} = require("../../../../validator/articles")
// var auth = require("../../../../utils/jwt")


router.post('/',
//   auth,
  createArticle,
 controller.createArticle);

module.exports = router;
