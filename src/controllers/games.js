const Game = require('../models/game');
const Category = require('../models/category')
const sequelize = require('../config/sequelize.js');

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

gameController.isModerator = function (req, res, next) {
    if (req.user) {
        sequelize.query("SELECT rank FROM users WHERE username = ?",
            { replacements: [req.user.username], type: sequelize.QueryTypes.SELECT })
            .then((rank) => {
                if (rank[0].rank == 2) {
                    next();
                } else {
                    res.redirect('/accesserror');
                }
            })
    } else {
        res.redirect('/accesserror');
    }
}

module.exports = gameController;