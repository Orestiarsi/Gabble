const express = require('express')
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require("../models");
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
router.use(function(req,res,next){
  // console.log("middleware working");
  next()
})

router.get('/', function(req,res){
  models.userInfo.findAll().then(function(users){
  res.render('signup',{red: users})
  })
});

router.post('/signup', function(req,res){
  console.log(username);
 const user = models.userinfo.build({
   username: req.body.username,
   password: req.body.password,
   nickname: req.body.nickname
 })
   user.save();
   res.redirect('signup')
 }
)

module.exports = router;
