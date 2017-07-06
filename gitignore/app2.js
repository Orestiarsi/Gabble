// console.log("nodemon onboard");
const express = require('express');
const mustache = require('mustache-express');
const User = require('./user.js');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const path = require('path');
const models = require("./models");
// const signupRouter = require('./routes/signup');
// const welcomeRouter = require('./routes/welcome');
// const logInRouter = require('./routes/logIn');

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views','./views/logIn']);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index')
});
console.log("step one");
// brentice auth start
app.get('/', function(req, res) {
  if (req.session && req.session.authenticated) {
    var user = models.userinfo.findOne({
      where: {
        username: req.session.username
      }
    }).then(function(currentUser) {
      res.render('userloggedin', {user: currentUser});
    })
  } else {
    res.redirect('/logIn')
  }
})

app.get('/logIn', function(req, res) {
  res.render('logIn')
})

app.post('/userloggedin', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  models.user.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if (user.password == password) {
      req.session.username = username;
      req.session.authenticated = true;
      res.redirect('/userloggedin');
    } else {
      res.redirect('/logIn');
    }
  })
})
app.post('/yellow',function(req, res){
  res.render('userloggedin');
})

// brentice auth end
console.log("step two");
app.listen(4000);
