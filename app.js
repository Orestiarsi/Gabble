// console.log("nodemon onboard");
const express = require('express');
const mustache = require('mustache-express');
// const User = require('./user.js');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const path = require('path');
const models = require("./models");
const signupRouter = require('./routes/signup');
const welcomeRouter = require('./routes/welcome');
const logInRouter = require('./routes/logIn');

var app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views','./views/logIn']);

app.use('/signup',signupRouter)
app.use('/welcome',welcomeRouter)
app.use('/logIn',logInRouter)


app.listen(3000, function (){
  console.log('onboard');
});
