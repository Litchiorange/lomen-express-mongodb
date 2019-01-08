var express = require('express');
var router = express.Router();
//引入
var mymongo1610 = require('mymongo1610');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;