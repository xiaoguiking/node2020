'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/getTag');
var router = express.Router();
router.get('/getTag', controller.getTag);

module.exports = router;
