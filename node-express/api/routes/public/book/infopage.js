
// 获取书籍筛选分页
'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/getInfoByPage');
var router = express.Router();
router.post('/getInfoByPage', controller.getInfoByPage);

module.exports = router;
