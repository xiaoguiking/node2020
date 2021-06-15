'use strict';
var express = require('express');
var controller = require('../../../controller/public/updateuser');
var router = express.Router();
router.put('/user/put', controller.put);

module.exports = router;
