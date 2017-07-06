const express = require('express')
const router = express.Router()

var app = express();

// app.post('/purple', function(req, res){
//   res.render('logIn')
// })


router.use(function(req,res,next){
  // console.log("middleware working");
  next()
})

router.get('/', function(req,res){
  // console.log('index for welcome')
  res.render('welcome')

})


module.exports = router
