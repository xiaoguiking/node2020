
// 获取图片素材列表
'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/getImages');
var router = express.Router();
router.get('/getImages', controller.getImages);

module.exports = router;
