const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');

const gameCategory = sequelize.define('game_category', {
  game_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = gameCategory;