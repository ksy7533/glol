var express = require('express');
var router = express.Router();

/* main page */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;