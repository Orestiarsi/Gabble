const express = require('express');
const mustache = require('mustache-express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const path = require('path');
const models = require("../models");
const router = express.Router()

// var app = express();
// app.engine('mustache', mustache());
// app.set('views', './views');
// app.set('view engine', 'mustache');
// app.use(express.static('./public'));;
//
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
console.log("first");

router.use(function(req,res,next) {
  console.log('in router');
  next()
})

router.get('/post-comment', function(req, res) {
  models.post.findAll().then(function(posts) {
    res.render('userloggedin', {post: posts})
  })
})

router.post('/post-comment', function(req,res){
  console.log(req.body);
 const post = models.post.build({
   title: req.body.title,
   body: req.body.body
 })
  user.save();
  res.render('userloggedin', + {post: posts});
 }
);

module.exports = router;
