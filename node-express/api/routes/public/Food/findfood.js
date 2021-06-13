'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/findfood');
var router = express.Router();
router.post('/find', controller.getTypeid);

module.exports = router;
