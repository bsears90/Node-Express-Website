const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');

const Game = sequelize.define('game', {
  game: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
  nickname: {
    type: Sequelize.CHAR(60),
    allowNull: false
  }
});

module.exports = Game; 