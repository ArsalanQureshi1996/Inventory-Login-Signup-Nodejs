var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Register' });
});


//Test Function

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var password= req.body.password;
  var userName= req.body.username;
  //console.log('Testing')

 //Validation
  req.checkBody('email' , 'Email is required').isEmail();
  req.checkBody('username' , 'userName is required').notEmpty();
  req.checkBody('password' , 'Password is required').notEmpty();


  var error = req.validationErrors();
  if(error){
    req.flash('error_msg', 'There is an error');
    console.log(error);
  }
  else{
    var newUser = new User({
      email: email,
      password:password,
      username:userName

    });
    User.createUser(newUser, function(err, user){
      if(err){throw err;}
       else{'User not created'};
       console.log(user);
       req.flash('success_msg', 'You are registered and can now login');
       res.redirect('login')

     });
  }

});

//Test Function Ends


module.exports = router;
