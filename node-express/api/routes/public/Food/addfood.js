'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/addfood');
var router = express.Router();
router.get('/add', controller.addfood);

module.exports = router;
