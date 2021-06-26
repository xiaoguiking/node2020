'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/getUser');
var router = express.Router();
router.get('/user', controller.getUser);

module.exports = router;
