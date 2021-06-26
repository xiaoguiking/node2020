'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/login');
var router = express.Router();
router.get('/users/login', controller.login);

module.exports = router;
