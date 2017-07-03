const express = require('express')
const router = express.Router()


router.use(function(req,res,next){
  // console.log("middleware working");
  next()
})

router.get('/', function(req,res){
  console.log('index for welcome')
  res.render('welcome')
})


module.exports = router
