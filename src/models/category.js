const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');

const Category = sequelize.define('category', {
  category: {
    type: Sequelize.CHAR(60),
    allowNull: false
  }
});

module.exports = Category;