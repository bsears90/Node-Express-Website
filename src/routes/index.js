var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function (req, res) {
	console.log('TEST 1 2 3');
	console.log(res.locals.user);
	res.render('index', {
		user: req.user
	});
});

module.exports = router;