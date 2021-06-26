'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/reg');
var router = express.Router();
router.post('/users/reg', controller.reg);

module.exports = router;
