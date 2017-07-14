const Game = require('../models/game');
const Category = require('../models/category')

var gameController = {};

gameController.createGame = function (req, res) {
    Game.create({
        game: 'The Legend of Zelda', nickname: 'tloz'
    }).then(console.log("20"));
};


gameController.createCategory = function (req, res) {
    Category.create({
        game_id: '26', category_id: '37'
    }).then((gameContents) => {
        console.log(gameContents);
    });
};

gameController.isModerator = function (req, res) {
    
}



module.exports = gameController;