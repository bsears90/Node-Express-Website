const sequelize = require('../config/sequelize.js');
const Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

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


// Hashing User's Password
module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}