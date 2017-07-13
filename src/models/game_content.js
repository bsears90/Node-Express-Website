const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');

const gameContent = sequelize.define('game_content', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  game_categories_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = gameContent;