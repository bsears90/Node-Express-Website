var express = require('express');
var router = express.Router();
const Game = require('../models/game');
const gameController = require('../controllers/games');
const sequelize = require('../config/sequelize.js');
var sanitizeHtml = require('sanitize-html');


// Get Games Page
router.get('/', function (req, res) {
	res.render('games', {
		user: req.user,
	});
});

router.post('/create', gameController.createCategory);


router.get('/:game', function (req, res, next) {
	var game = req.params.game;
	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			if (typeof game_id == undefined|| game_id.length <= 0) return next();
			sequelize.query('SELECT categories.category, categories.nickname' +
				' FROM categories, game_categories' +
				' WHERE game_categories.game_id = ?' +
				' AND game_categories.category_id = categories.id',
				{ replacements: [game_id[0].id], type: sequelize.QueryTypes.SELECT })
				.then((categories) => {
					res.render('game_category', {
						game: game,
						categories: categories
					})

				})

		});
});

//Render out game content
router.get('/:game/:category', function (req, res, next) {
	var game = req.params.game;
	var category = req.params.category;
	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			sequelize.query("SELECT id FROM categories WHERE nickname = ?",
				{ replacements: [category], type: sequelize.QueryTypes.SELECT })
				.then((category_id) => {
					if(typeof game_id == undefined || typeof category_id == undefined || game_id.length <= 0 || category_id.length <= 0) return next();
					sequelize.query("SELECT content FROM game_categories WHERE ? = game_categories.game_id AND ? = game_categories.category_id",
						{ replacements: [game_id[0].id, category_id[0].id], type: sequelize.QueryTypes.SELECT }).then((content) => {
							res.render('content', {
								game: game,
								category: category,
								content: content[0].content
							})
						})
				});
		});
});

//Render out edit form
router.get('/:game/:category/edit', function (req, res) {
	var game = req.params.game;
	var category = req.params.category;

	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			sequelize.query("SELECT id FROM categories WHERE nickname = ?",
				{ replacements: [category], type: sequelize.QueryTypes.SELECT })
				.then((category_id) => {
					sequelize.query("SELECT content FROM game_categories WHERE ? = game_categories.game_id AND ? = game_categories.category_id",
						{ replacements: [game_id[0].id, category_id[0].id], type: sequelize.QueryTypes.SELECT }).then((content) => {
							res.render('content_edit', {
								game: game,
								category: category,
								content: content[0].content
							})
						})
				});
		});
});

router.post('/:game/:category', function (req, res) {
	var game = req.params.game;
	var category = req.params.category;
	var data = sanitizeHtml(req.body.data, {
		allowedTags: false,
		allowedAttributes: false
	});
	
	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			sequelize.query("SELECT id FROM categories WHERE nickname = ?",
				{ replacements: [category], type: sequelize.QueryTypes.SELECT })
				.then((category_id) => {
					sequelize.query("UPDATE game_categories SET content = ? WHERE ? = game_categories.game_id AND ? = game_categories.category_id",
						{ replacements: [data, game_id[0].id, category_id[0].id], type: sequelize.QueryTypes.INSERT })
				});
		});
});



module.exports = router;