const Game = require('../models/game');
const Category = require('../models/category')
const gameContent = require('../models/game_content')

var gameController = {};

gameController.createGame = function (req, res) {
    Game.create({
        game: 'The Legend of Zelda', nickname: 'tloz'
    }).then(console.log("20"));
};


gameController.createCategory = function (req, res) {
    gameContent.create({
        game_categories_id: '3', content: 'Hello World!123'
    }).then((gameContents) => {
        console.log(gameContents);
    });
};



module.exports = gameController;