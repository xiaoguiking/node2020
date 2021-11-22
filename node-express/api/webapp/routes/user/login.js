/**
 * *用户登录
 */
 const express = require('express');
 const controller = require('../../controller/user/login');
 const router = express.Router();
//  const loginValidate = require("../../../../../validator/user")
//  router.get('/user/login', loginValidate.login,controller.login);
 router.post('/user/login', controller.login);
 
 module.exports = router;
 