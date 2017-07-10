var express = require('express');
var router = express.Router();
const Game = require('../models/game');
const gameController = require('../controllers/games');
const sequelize = require('../config/sequelize.js');

// Get Games Page
router.get('/', function (req, res) {
	res.render('games', {
		user: req.user,
	});
});

router.post('/create', gameController.createCategory);


router.get('/:game', function (req, res) {
	var game = req.params.game;
	console.log(game);
	sequelize.query("SELECT id FROM games WHERE nickname = ?", { replacements: [game], type: sequelize.QueryTypes.SELECT }).then((game_id) => {
		console.log(game_id)
		sequelize.query('SELECT categories.category' +
			' FROM categories, game_categories' +
			' WHERE game_categories.game_id = ?' +
			' AND game_categories.category_id = categories.id', { replacements: [game_id[0].id], type: sequelize.QueryTypes.SELECT }).then((categories) => {
				console.log(categories);
			})
	});
});

module.exports = router;