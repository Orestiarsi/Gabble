const express = require('express')
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const router = express.Router()

// middleware
router.use(function(req,res,next){
  // console.log("middleware working");
  next()
})

router.get('/', function(req,res){
  console.log('index for logIn')
  res.render('logIn')
})


module.exports = router
