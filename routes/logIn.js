const express = require('express')
const router = express.Router()

// middl
router.use(function(req,res,next){
  // console.log("middleware working");
  next()
})


router.get('/', function(req,res){
  console.log('index for logIn')
  res.render('logIn')
})
router.get('/LogIn',function(req,res){
  res.render('LogIn')
})
module.exports = router
