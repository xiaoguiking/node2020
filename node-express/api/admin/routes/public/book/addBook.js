'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/addBook');
var router = express.Router();
router.post('/add', controller.addBook);

module.exports = router;
