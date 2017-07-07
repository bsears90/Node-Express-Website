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

// Hashing User's Password
User.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

User.getUserByUsername = function (username) {
  User.findOne({ where: { username: username } });
}

User.getUserById = function (id, callback) {
  User.findById(id).then(callback);
}

User.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  })
}

module.exports = User;