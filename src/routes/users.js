var express = require('express');
var router = express.Router();
var { registerUser } = require('../controllers/users')

// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

router.post('/register', registerUser);


module.exports = router;