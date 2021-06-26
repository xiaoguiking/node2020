'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/updateuser');
var router = express.Router();
router.put('/users/put', controller.put);

module.exports = router;
