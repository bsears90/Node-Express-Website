const Game = require('../models/game');
const Category = require('../models/category')
const gameCategory = require('../models/game_category')

var gameController = {};

gameController.createGame = function (req, res) {
    Game.create({
        game: 'The Legend of Zelda', nickname: 'tloz'
    }).then(console.log("20"));
};


gameController.createCategory = function (req, res) {
    gameCategory.create({
        game_id: '27', category_id: '6'
    }).then((game_category) => {
        console.log('inserted ' + game_category.category_id);
    });
};



module.exports = gameController;