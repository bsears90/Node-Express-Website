var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function (req, res) {
	res.render('index', {
		user: req.user,
	});
});

router.get('/404error', function (req, res) {
	res.render('404');
});

router.get('/accesserror', function (req, res) {
	res.render('invalid_access');
});


module.exports = router;