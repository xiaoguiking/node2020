// 获取指定文章
'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/getBookById');
var router = express.Router();
router.get('/:bookId', controller.getBookById);

module.exports = router;
