var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.body)
    res.render('reg', {
        title: "注册"
    });

});

module.exports = router;