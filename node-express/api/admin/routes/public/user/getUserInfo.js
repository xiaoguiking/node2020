'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/getUserInfo');
var router = express.Router();
router.get('/profiles/:username', controller.getUserInfo);

module.exports = router;
