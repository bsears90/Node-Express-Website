const User = require('../models/user');


function getAllUsers(req, res, next) {
  User.findAll().then((users) => {
    res.json(users);
  });
}

function createUser(req, res, next) {
  User.sync();
  return User.create({ username: "matt" }).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    res.status(500).send(error);
  })
}

function deleteUser(req, res, next) {
  var username = req.body.username;
  return User.destroy({
    where: {
      username: username
    }
  }).then(function (rowDeleted) {
    console.log ("Row where username is " + username + "has deleted " + rowDeleted + " row.");
  });
}

function registerUser(req, res){
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
	if(errors){
    res.render('register', {
      errors: errors
    });
	} else {
		console.log('PASSED');
	}
}

function updateUser(req, res, next) {
  var username = req.body.username;
    return User.update(
    //Set username (in database) to username (which was submitted in body object)
    {username: username},
    {where: {id: 1} // ID should be current logged in user. 
    }).then(function (rowResult) {
      console.log(rowResult);
      res.json(rowResult);
  });
}



module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  registerUser
}
