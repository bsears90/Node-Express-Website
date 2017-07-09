const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');


const User = sequelize.define('user', {
  username: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
  password: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
  email: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
  name: {
    type: Sequelize.CHAR(60),
    allowNull: false
  },
});


module.exports = User;