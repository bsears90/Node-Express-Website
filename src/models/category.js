const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');

const Category = sequelize.define('game_categories', {
  game_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  category_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
});

module.exports = Category;