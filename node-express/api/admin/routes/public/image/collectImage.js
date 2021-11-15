
// 收藏图片
'use strict';
var express = require('express');
var controller = require('../../../controller/public/image/collectImage');
var router = express.Router();
router.get('/collectImage', controller.collectImage);

module.exports = router;
