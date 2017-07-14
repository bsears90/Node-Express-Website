const User = require('../models/user');
var userController = {};
var bcrypt = require('bcryptjs');

//  Works
userController.getAllUsers = function (req, res, next) {
  User.findAll().then((users) => {
    res.json(users);
  });
}

// Works
userController.deleteUser = function (req, res, next) {
  var username = "matt"; // Username = "matt" needs to be dynamic
  return User.destroy({
    where: {
      username: username
    }
  }).then(function (rowDeleted) {
    console.log("Row where username is " + username + " has deleted " + rowDeleted + " row(s).");
  });
}

userController.registerUser = function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    res.render('register', {
      errors: errors,
      layout: false
    });
  }
  User.findOne({
    where: {
      username: username,
    }
  }).then((username) => {
    if (!username) {
      return userController.createUser();
    }
    else {
      console.log('Username already exists.')
    }
  });
  
  var newUser = new User({
    name: name,
    email: email,
    username: username,
    password: password
  });
  
  userController.createUser(newUser, function (err, user) {
    if (err) throw err;
  });
  req.flash('success_msg', 'You are registered and can now login.')
  res.redirect('/users/login')
}

userController.updateUser = function (req, res, next) {
  var username = req.body.username;
  return User.update(
    //Set username (in database) to username (which was submitted in body object)
    { username: username },
    {
      where: { id: 1 } // ID should be current logged in user. 
    }).then(function (rowResult) {
      console.log(rowResult);
      res.json(rowResult);
    });
}

// Hashing User's Password
userController.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

userController.getUserByUsername = function (username) {
  User.findOne({ where: { username: username } });
}

userController.getUserById = function (id, callback) {
  User.findById(id).then(callback);
}

userController.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  })
}


module.exports = userController;
