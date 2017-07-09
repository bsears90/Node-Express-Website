var express = require('express');
var router = express.Router();
const Game = require('../models/game');

// Get Games Page
router.get('/', function (req, res) {
	res.render('games', {
		user: req.user,
	});
});

router.get('/:game');

module.exports = router;