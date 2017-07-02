// console.log("nodemon onboard");
const express = require('express');
const mustache = require('mustache-express');
const User = require('./user.js');
const logInRouter = require('./routes/logIn')
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const path = require('path');
const models = require("./models");

var app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views','./views/logIn']);

app.use('/logIn',logInRouter)


app.get ('/', function(req, res){

  var user = User.find('oresti')
  res.send(user)
  // res.render('')
})
app.get('/list', function(req, res){
  res.send(User.all)
})

// app.use(express.static('./public'));;
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
// app.use(session({secret: 'your password',saveUninitialized: true, resave: false,}));
//
// app.use(function(req, res, next){
//   var views = req.session. views;
//   if (!views){
//     views = req.session.views = {};
//   }
//   var pathname = parseurl(req).pathname;
//   views[pathname] = (views[pathname] || 0) +1
//   next();
// });
//
// // app.use(expressValidator());
//
// function authenticate(req, username, password){
//   var authenticateUser = data.users.find(function (user){
//     if (username === user.username && password === user.password){
//       req.session.authenticated = true;
//       console.log("users authentication");
//     } else {
//        return false
//     }
//   })
// };
//
// app.get('/', function(req, res) {
//   res.render('logIn')
//
// })
// app.post('/', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   authenticate(req, username, password);
//   if (req.session && req.session.authenticated){
//     res.render('/home', {username: username});
//   }else {
//     res.redirect('/wrongInfo');
//   }
// });

app.listen(3000, function (){
  console.log('onboard');
});
