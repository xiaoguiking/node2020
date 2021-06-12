'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/addfood');
var router = express.Router();
router.post('/add', controller.addfood);

module.exports = router;
