// book 更新
'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/updateBook');
var router = express.Router();
router.put('/:bookId', controller.updateBook);

module.exports = router;
