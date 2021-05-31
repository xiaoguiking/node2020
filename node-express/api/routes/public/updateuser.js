'use strict';
var express = require('express');
var controller = require('../../controller/public/reg');
var router = express.Router();
router.put('/user', controller.reg);

module.exports = router;
