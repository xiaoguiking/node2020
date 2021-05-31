'use strict';
var express = require('express');
var controller = require('../../controller/public/reg');
var router = express.Router();
router.post('/reg', controller.reg);

module.exports = router;
