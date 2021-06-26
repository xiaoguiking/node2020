'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/focusUser');
var router = express.Router();
router.post('/profiles/:username/follow', controller.focusUser);

module.exports = router;
