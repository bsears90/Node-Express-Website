var express = require('express');
var router = express.Router();
var { registerUser, getAllUsers, deleteUser } = require('../controllers/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
var bcrypt = require('bcryptjs');

// Use Passport
passport.use(new LocalStrategy(
	function (username, password, done) {
		User.findOne({ where: { username: username } }).then(function (user, err) {
			if (err) {
				throw err;
			}
			if (!user) {
				return done(null, false, { message: "Invalid username/password" });
			}
			bcrypt.compare(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid username/password' })
				}
			})
		})
	})
);


passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (user) {
		done(null, user);
	});
});

// Register
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

router.post('/register', registerUser);

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		// If this function gets called, authentication was successful.
		// `req.user` contains the authenticated user.
		req.flash('success_msg', "Logged in");
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();
	req.flash('success_msg', 'You are now logged out');
	res.redirect('/');
});

module.exports = router;