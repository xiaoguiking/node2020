'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/getUser');
var router = express.Router();
router.get('/users', controller.getUser);

module.exports = router;
