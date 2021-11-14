// 用户注册
'use strict';
var express = require('express');
// api 
var controller = require('../../../controller/public/user/reg');
// validate验证
var userValidate = require("../../../../../validator/user");
var router = express.Router();

router.post('/users/reg',
    userValidate.reg,
    controller.reg);
module.exports = router;
