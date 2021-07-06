// 获取文章频道 类型
'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/getChannels');
var router = express.Router();
router.get('/getChannels', controller.getChannels);

module.exports = router;
