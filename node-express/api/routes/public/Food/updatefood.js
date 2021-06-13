'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/updatefood');
var router = express.Router();
router.post('/update', controller.update);

module.exports = router;
