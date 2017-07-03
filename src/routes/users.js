var express = require('express');
var router = express.Router();
var { registerUser, getAllUsers, createUser, deleteUser } = require('../controllers/users')

// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

router.post('/register', registerUser);

router.post('/register1', deleteUser);


module.exports = router;