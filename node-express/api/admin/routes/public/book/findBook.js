'use strict';
var express = require('express');
var controller = require('../../../controller/public/book/findBook');
var router = express.Router();
router.post('/find', controller.findBook);

module.exports = router;
