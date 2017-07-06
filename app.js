console.log("nodemon onboard");
const express = require('express');
const mustache = require('mustache-express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const path = require('path');
const models = require("./models");
// const userloggedinRouter = require('./routes/userloggedin');

var app = express();

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./public'));;

// app.use('/userloggedin',userloggedinRouter)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/yellow', function(req,res){
  console.log(req.body);
 const user = models.userInfo.build({
   username: req.body.username,
   password: req.body.password,
   nickname: req.body.nickname
 })
  user.save();
  res.render('userloggedin');
 }
);

app.get('/',function(req,res){
  res.render('index')
});

app.post('/index', function(req, res) {
  let username = req.body.username
  let password = req.body.password

  models.userInfo.findOne({
    where: {
     username: req.body.username,
     password: req.body.password
    }
  }).then(userInfo => {
    // if (user.password == password) {
      console.log("sessions starteddddd");
      req.session.username = username;
      req.session.userInfo = userInfo.id;
      req.session.authenticated = true;
      res.redirect('/userloggedin');
    }).catch(error =>{
      req.session.authenticated = false;
      res.redirect('/wrongInfo');
    })
  return req.session;
});

app.get('/userloggedin',function(req, res){
  res.render('userloggedin')
});

app.get('/wrongInfo', function(req, res){
  res.render('wrongInfo')
});

app.get('/post-comment', function(req, res) {
  models.post.findAll().then(function(posts) {
    res.render('userloggedin', {post: posts})
  })
})

app.post('/post-comment', function(req,res){
  console.log(req.body);
 const post = models.post.build({
   title: req.body.title,
   body: req.body.body
 })
  res.render('userloggedin', {post: post});
  post.save();
 }
);



app.listen(3000, function (){
  console.log('onboard');
});
