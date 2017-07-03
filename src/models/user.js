const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');


const User = sequelize.define('user', {
  id: {
    type: Sequelize.CHAR(30),
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
});

User.sync();

module.exports = User;
