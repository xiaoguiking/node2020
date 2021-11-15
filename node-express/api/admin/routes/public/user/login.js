// 用户登录
'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/login');
var router = express.Router();
var loginValidate = require("../../../../../validator/user")
router.get('/user/login', loginValidate.login,controller.login);

module.exports = router;

