'use strict';
var express = require('express');
var controller = require('../../../controller/public/proxy/getImooc');
var router = express.Router();
router.get('/getImooc', controller.getImooc);

module.exports = router;
