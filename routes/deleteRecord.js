var express = require('express');
var router = express.Router();
var Record = require('../models/users');
var mongodb = require ('mongodb')

/* GET home page. */
router.get('/', function(req, res, next) {

  Record.find({}, function(err,user){
    if(err){throw err;}
    else{
      console.log(user);
      res.render('deleteRecord', {users:user});
      //console.log(users);
    }
  });
});

router.get('/deleteRecord/delete/:id', function(req,res,next){
  var delete_id = req.params.id;
  console.log(req.params.id,'\n\n\n\n');

  Record.deleteOne({_id: mongodb.ObjectID(req.params.id)}, function(err, result){
    if(err){throw err;}
    else{
      console.log('Inside Else Function... HUlalalalalalalalalalalala');
      res.redirect('/deleteRecord');}
  });
});

// router.get('/deleteRecord/delete/:id', function(req, res){
//   db.collection('inventories').remove({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
//     if (err) return console.log(err)
//     console.log('Welcome to Delete Function');
//     res.redirect('deleteRecord');
//   });
// });

// router.get('/deleteRecord/delete/:id', function(req,res){
//   console.log('Hello World... Inside delete Function\n\n\n\n\n')
//   db.collection('inventories').find({_id: mongodb.ObjectID(req.param.id)}).remove();
// });

module.exports = router;
