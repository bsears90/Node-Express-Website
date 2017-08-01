var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

// Model Routes
const User = require('./models/user');
const Game = require('./models/game');
const Category = require('./models/category');

// Routes to index
var index = require('./routes/index');
var users = require('./routes/users');
var games = require('./routes/games');


// Init App
const app = express();



// BodyParser Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// Connect Flash
app.use(flash());

// Passport init
app.use(passport.initialize());
app.use(passport.session());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// Creating Flash Global Variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user;
  next();
});

// Sync models to create tables if not exists
User.sync();
Game.sync();
Category.sync();


// Connects ./routes to app so we can use the routes
app.use('/', index);
app.use('/users', users);
app.use('/games', games);

//redirect page
app.use(function(req , res, next) { res.redirect( '/404error'); });

// Listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
