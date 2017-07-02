const { User } = require('../models')


function getAllUsers(req, res, next) {
  User.findAll().then((users) => {
    res.json(users);
  });
}

function createUser(req, res, next) {
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
  updateUser
}
